import User from "./models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { GraphQLError } from "graphql";
import changePassword from "./utils/changePassword";

dotenv.config();

const resolvers = {
  Query: {
    users: async () => await User.find({}),
  },

  Mutation: {
    addUser: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email: email });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email: args.email,
          password: hashedPassword,
        });
        await newUser.save();
        const token = jwt.sign({ userid: newUser._id }, process.env.JWT_SECRET);
        return { token };
      } else {
        console.log("user already exists");
      }
    },
    login: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email: email });
      if (user) {
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
          const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          return { token };
        } else {
          return { error: "invalid password" };
        }
      } else {
        return { error: "user not found" };
      }
    },
    updatePassword: async (parent, args, { id }) => {
      const user = await User.findOne({ _id: id.id });
      if (!user) throw new GraphQLError("User not found");
      const { twoFactorAuth } = user;

      const { oldPassword, newPassword } = args;
      const passwordObject = {
        oldPassword,
        newPassword,
        user,
      };
      if (twoFactorAuth && !id.verified)
        throw new GraphQLError(
          "Two factor authentication is enabled. Please verify your account"
        );
      else {
        return changePassword(passwordObject);
      }
    },

    enableTwoFactor: async (parent, args, { id }) => {
      const user = await User.findOne({ _id: id.id });

      const { twoFactorAuth } = user;
      if (!twoFactorAuth) {
        if (user) {
          const secret = speakeasy.generateSecret({
            name: "My Awesome App",
          });
          user.secret = secret.base32;
          const code = qrcode.toDataURL(secret.otpauth_url);
          user.twoFactorAuth = true;
          await user.save();
          return {
            enabled: true,
            qrcode: code,
          };
        } else {
          throw new Error("You are not authorized");
        }
      } else {
        throw new Error("Two factor authentication is already enabled");
      }
    },
    disableTwoFactor: async (parent, args, { id }) => {
      const user = await User.findOne({ _id: id.id });
      const { twoFactorAuth } = user;
      if (twoFactorAuth) {
        if (user) {
          user.twoFactorAuth = false;
          await user.save();
          return {
            enabled: false,
            qrcode: null,
          };
        } else {
          throw new Error("You are not authorized");
        }
      } else {
        throw new Error("Two factor authentication is already disabled");
      }
    },
    verifyTwoFactor: async (parent, args, { id }) => {
      const user = await User.findOne({ _id: id.id });

      const { secret } = user;
      const { code } = args;

      const verified = speakeasy.totp.verify({
        secret: secret,
        encoding: "base32",
        token: code,
      });
      let token = null;
      if (verified) {
        token = jwt.sign(
          { userid: user._id, verified: verified },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
      }
      return {
        token: token,
      };
    },
  },
};

export default resolvers;
