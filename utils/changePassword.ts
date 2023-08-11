import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const changePassword = async (passwordObject) => {
    const { user, oldPassword, newPassword} = passwordObject;
    
    const valid = await bcrypt.compare(oldPassword, user.password);
    if (valid) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return { token };
    } else {
      return { error: "invalid password" };
    }
}

export default changePassword; 