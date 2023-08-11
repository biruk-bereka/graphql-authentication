import jwt from "jsonwebtoken";

const getUser = async (token: string) => {
    let id: string = null;
    let verified: boolean = false;
    if(token) {
        await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
              throw new Error("Session invalid");
            }
            id = decoded.userid;
            verified = decoded.verified;
          });
        return {id, verified};
    }else {
        throw new Error("You must be logged in");
    }
};
export default getUser;
