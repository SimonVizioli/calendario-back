import { Request, Response } from "express";
import Event from "../models/Event";

export const getEventById = async (req: Request, res: Response) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving event", error });
    }
};

export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving events", error });
    }
};

export const createEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    try {
        const [updated] = await Event.update(req.body, {
            where: { UniqueID: req.params.id },
        });
        if (updated) {
            const updatedEvent = await Event.findByPk(req.params.id);
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const deleted = await Event.destroy({
            where: { UniqueID: req.params.id },
        });
        if (deleted) {
            res.status(204).json({ message: "Event deleted" });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
};

export const countEvents = async (req: Request, res: Response) => {
    try {
        const count = await Event.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: "Error counting events", error });
    }
};
