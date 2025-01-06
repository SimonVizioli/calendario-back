import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.JWT_SECRET || "your_secret_key";

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
