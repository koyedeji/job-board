import jwt from "jsonwebtoken";
import { Request } from "express";

class Token {
  static secretKey = "shhhdsedsssds";

  static generate(params: { id: string }) {
    return jwt.sign(params, Token.secretKey);
  }

  static decode(token: string) {
    return jwt.verify(token, Token.secretKey);
  }

  static getCurrentUser(req: Request) {
    const authToken = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", " ")
      : null;
    if (!authToken) {
      throw new Error("No token found");
    }

    return Token.decode(authToken) as { id: string };
  }
}

export default Token;
