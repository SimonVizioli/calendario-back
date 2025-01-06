import { Request, Response } from "express";
import User from "../models/User";
import UserSchedule from "../models/UserSchedule";
import EventSchedule from "../models/EventSchedule";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Busca al usuario
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verifica la contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Genera el token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    const { username, password, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: "Username alredy taken" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Crea el usuario
        await User.create({
            username,
            password: hashedPassword,
            firstName,
            lastName,
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { username },
        });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        const [updated] = await User.update(updateFields, {
            where: { id },
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error: any) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            message: "Error updating user",
            error: error.message || error,
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Eliminar registros relacionados en UserSchedule
        await UserSchedule.destroy({ where: { user_id: id } });

        await EventSchedule.destroy({ where: { user_id: id } });

        // Eliminar el usuario
        const deleted = await User.destroy({
            where: { id },
        });
        if (deleted) {
            res.status(204).json({ message: "User deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: "Error deleting user",
                error: error.message,
            });
        } else {
            return res.status(500).json({
                message: "Unknown error occurred",
                error: String(error),
            });
        }
    }
};

export const countUsers = async (req: Request, res: Response) => {
    try {
        const count = await User.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: "Error counting users", error });
    }
};
