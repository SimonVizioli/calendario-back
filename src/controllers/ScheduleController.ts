import { Request, Response } from "express";
import Schedule from "../models/Schedule";
import EventSchedule from "../models/EventSchedule";
import UserSchedule from "../models/UserSchedule";

export const getScheduleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const schedule = await Schedule.findByPk(req.params.id);
        if (schedule) {
            res.status(200).json(schedule);
        } else {
            res.status(404).json({ message: "Schedule not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving schedule", error });
    }
};

export const getAllSchedules = async (req: Request, res: Response) => {
    try {
        const schedules = await Schedule.findAll();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving schedules", error });
    }
};

export const createSchedule = async (req: Request, res: Response) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Error creating schedule", error });
    }
};

export const updateSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        const [updated] = await Schedule.update(updateFields, {
            where: { id },
        });
        if (updated) {
            const updatedSchedule = await Schedule.findByPk(id);
            res.status(200).json(updatedSchedule);
        } else {
            res.status(404).json({ message: "Schedule not found" });
        }
    } catch (error: any) {
        console.error("Error updating event:", error);
        return res.status(500).json({
            message: "Error updating event",
            error: error.message || error,
        });
    }
};

export const deleteSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        // Eliminar registros relacionados en EventSchedule
        await EventSchedule.destroy({
            where: { schedule_id: id },
        });
        await UserSchedule.destroy({ where: { schedule_id: id } });

        const deleted = await Schedule.destroy({
            where: { id },
        });

        if (deleted) {
            res.status(204).json({ message: "Schedule deleted" });
        } else {
            res.status(404).json({ message: "Schedule not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting schedule", error });
    }
};

export const countSchedules = async (req: Request, res: Response) => {
    try {
        const count = await Schedule.count();
        res.status(200).json({ count });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: "Error deleting event",
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
