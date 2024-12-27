import { Request, Response } from "express";
import Schedule from "../models/Schedule";

export const getScheduleById = async (req: Request, res: Response) => {
    try {
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
        const [updated] = await Schedule.update(req.body, {
            where: { UniqueID: req.params.id },
        });
        if (updated) {
            const updatedSchedule = await Schedule.findByPk(req.params.id);
            res.status(200).json(updatedSchedule);
        } else {
            res.status(404).json({ message: "Schedule not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating schedule", error });
    }
};

export const deleteSchedule = async (req: Request, res: Response) => {
    try {
        const deleted = await Schedule.destroy({
            where: { UniqueID: req.params.id },
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
        res.status(500).json({ message: "Error counting schedules", error });
    }
};
