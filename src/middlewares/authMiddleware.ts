import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

declare global {
    namespace Express {
        interface Request {
            user?: string | JwtPayload;
        }
    }
}

export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .json({ message: "Access token is missing or invalid" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res
                .status(403)
                .json({ message: "Invalid or expired token" });
        }

        req.user = user;
        next();
    });
};
