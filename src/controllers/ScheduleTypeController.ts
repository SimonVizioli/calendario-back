import { Request, Response } from "express";
import ScheduleType from "../models/ScheduleType";

export const getScheduleTypeById = async (req: Request, res: Response) => {
    try {
        const scheduleType = await ScheduleType.findByPk(req.params.id);
        if (scheduleType) {
            res.status(200).json(scheduleType);
        } else {
            res.status(404).json({ message: "ScheduleType not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving scheduleType",
            error,
        });
    }
};

export const getAllScheduleTypes = async (req: Request, res: Response) => {
    try {
        const scheduleTypes = await ScheduleType.findAll();
        res.status(200).json(scheduleTypes);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving scheduleTypes",
            error,
        });
    }
};

export const createScheduleType = async (req: Request, res: Response) => {
    try {
        const scheduleType = await ScheduleType.create(req.body);
        res.status(201).json(scheduleType);
    } catch (error) {
        res.status(500).json({ message: "Error creating scheduleType", error });
    }
};

export const updateScheduleType = async (req: Request, res: Response) => {
    try {
        const [updated] = await ScheduleType.update(req.body, {
            where: { UniqueID: req.params.id },
        });
        if (updated) {
            const updatedScheduleType = await ScheduleType.findByPk(
                req.params.id
            );
            res.status(200).json(updatedScheduleType);
        } else {
            res.status(404).json({ message: "ScheduleType not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating scheduleType", error });
    }
};

export const deleteScheduleType = async (req: Request, res: Response) => {
    try {
        const deleted = await ScheduleType.destroy({
            where: { UniqueID: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ message: "ScheduleType deleted" });
        } else {
            res.status(404).json({ message: "ScheduleType not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting scheduleType", error });
    }
};

export const countScheduleTypes = async (req: Request, res: Response) => {
    try {
        const count = await ScheduleType.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({
            message: "Error counting scheduleTypes",
            error,
        });
    }
};
