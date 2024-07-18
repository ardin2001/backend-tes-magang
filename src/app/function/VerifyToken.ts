import jwt from "jsonwebtoken";
export default function VerifyToken(token: any) {
  try {
    const arr = token.split(" ");
    token = arr[1];
    var decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    if (decoded) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
