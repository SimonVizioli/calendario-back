import { Request, Response } from "express";
import EventSchedule from "../models/EventSchedule";

export const getEventScheduleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res
                .status(400)
                .json({ message: "EventSchedule ID is required" });
        }

        const eventSchedule = await EventSchedule.findByPk(id);
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
        const { eventId } = req.query;
        const { userId } = req.query;
        const { scheduleId } = req.query;

        // Si se pasa un eventId, filtra los resultados
        const filter = eventId
            ? { where: { event_id: eventId } }
            : userId
            ? { where: { user_id: userId } }
            : scheduleId
            ? { where: { schedule_id: scheduleId } }
            : {};

        const eventSchedules = await EventSchedule.findAll(filter);

        return res.status(200).json(eventSchedules);
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
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res
                .status(400)
                .json({ message: "EventSchedule ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        const [updated] = await EventSchedule.update(updateFields, {
            where: { id },
        });
        if (updated) {
            const updatedEventSchedule = await EventSchedule.findByPk(id);
            res.status(200).json(updatedEventSchedule);
        } else {
            res.status(404).json({ message: "EventSchedule not found" });
        }
    } catch (error: any) {
        console.error("Error updating event:", error);
        return res.status(500).json({
            message: "Error updating event",
            error: error.message || error,
        });
    }
};

export const deleteEventSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const deleted = await EventSchedule.destroy({
            where: { id },
        });
        if (deleted) {
            res.status(204).json({ message: "EventSchedule deleted" });
        } else {
            res.status(404).json({ message: "EventSchedule not found" });
        }
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
