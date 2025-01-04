import { Request, Response } from "express";
import UserSchedule from "../models/UserSchedule";

export const getUserScheduleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res
                .status(400)
                .json({ message: "UserSchedule ID is required" });
        }

        const userSchedule = await UserSchedule.findByPk(id);
        if (userSchedule) {
            res.status(200).json(userSchedule);
        } else {
            res.status(404).json({ message: "UserSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving userSchedule",
            error,
        });
    }
};

export const getAllUserSchedules = async (req: Request, res: Response) => {
    try {
        const userSchedules = await UserSchedule.findAll();
        res.status(200).json(userSchedules);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving userSchedules",
            error,
        });
    }
};

export const createUserSchedule = async (req: Request, res: Response) => {
    try {
        const userSchedule = await UserSchedule.create(req.body);
        res.status(201).json(userSchedule);
    } catch (error) {
        res.status(500).json({ message: "Error creating userSchedule", error });
    }
};

export const updateUserSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        const [updated] = await UserSchedule.update(updateFields, {
            where: { id },
        });
        if (updated) {
            const updatedUserSchedule = await UserSchedule.findByPk(id);
            res.status(200).json(updatedUserSchedule);
        } else {
            res.status(404).json({ message: "UserSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating userSchedule", error });
    }
};

export const deleteUserSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const deleted = await UserSchedule.destroy({
            where: { id },
        });
        if (deleted) {
            res.status(204).json({ message: "UserSchedule deleted" });
        } else {
            res.status(404).json({ message: "UserSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting userSchedule", error });
    }
};

export const countUserSchedules = async (req: Request, res: Response) => {
    try {
        const count = await UserSchedule.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({
            message: "Error counting userSchedules",
            error,
        });
    }
};
