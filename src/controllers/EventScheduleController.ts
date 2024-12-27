import { Request, Response } from "express";
import EventSchedule from "../models/EventSchedule";

export const getEventScheduleById = async (req: Request, res: Response) => {
    try {
        const eventSchedule = await EventSchedule.findByPk(req.params.id);
        if (eventSchedule) {
            res.status(200).json(eventSchedule);
        } else {
            res.status(404).json({ message: "EventSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving eventSchedule",
            error,
        });
    }
};

export const getAllEventSchedules = async (req: Request, res: Response) => {
    try {
        const eventSchedules = await EventSchedule.findAll();
        res.status(200).json(eventSchedules);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving eventSchedules",
            error,
        });
    }
};

export const createEventSchedule = async (req: Request, res: Response) => {
    try {
        const eventSchedule = await EventSchedule.create(req.body);
        res.status(201).json(eventSchedule);
    } catch (error) {
        res.status(500).json({
            message: "Error creating eventSchedule",
            error,
        });
    }
};

export const updateEventSchedule = async (req: Request, res: Response) => {
    try {
        const [updated] = await EventSchedule.update(req.body, {
            where: { UniqueID: req.params.id },
        });
        if (updated) {
            const updatedEventSchedule = await EventSchedule.findByPk(
                req.params.id
            );
            res.status(200).json(updatedEventSchedule);
        } else {
            res.status(404).json({ message: "EventSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating eventSchedule",
            error,
        });
    }
};

export const deleteEventSchedule = async (req: Request, res: Response) => {
    try {
        const deleted = await EventSchedule.destroy({
            where: { UniqueID: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ message: "EventSchedule deleted" });
        } else {
            res.status(404).json({ message: "EventSchedule not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting eventSchedule",
            error,
        });
    }
};

export const countEventSchedules = async (req: Request, res: Response) => {
    try {
        const count = await EventSchedule.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({
            message: "Error counting eventSchedules",
            error,
        });
    }
};
