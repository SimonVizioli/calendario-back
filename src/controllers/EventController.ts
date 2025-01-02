import { Request, Response } from "express";
import Event from "../models/Event";
import EventSchedule from "../models/EventSchedule";

export const getEventById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

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
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        // Actualizar el evento
        const [updated] = await Event.update(updateFields, {
            where: { id },
        });

        if (updated) {
            const updatedEvent = await Event.findByPk(id);
            return res.status(200).json(updatedEvent);
        } else {
            return res.status(404).json({ message: "Event not found" });
        }
    } catch (error: any) {
        console.error("Error updating event:", error);
        return res.status(500).json({
            message: "Error updating event",
            error: error.message || error,
        });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        // Eliminar registros relacionados en EventSchedule
        await EventSchedule.destroy({
            where: { event_id: id },
        });

        // Eliminar el evento
        const deleted = await Event.destroy({
            where: { id },
        });

        if (deleted) {
            return res.status(204).json({ message: "Event deleted" });
        } else {
            return res.status(404).json({ message: "Event not found" });
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

export const countEvents = async (req: Request, res: Response) => {
    try {
        const { filter } = req.query;

        // Validar el parámetro filter
        const where = filter ? JSON.parse(filter as string) : undefined;

        // Realizar el conteo de eventos
        const count = await Event.count({ where });

        return res.status(200).json({ count });
    } catch (error) {
        console.error("Error counting events:", error);
        return res.status(500).json({
            message: "Error counting events",
            error: (error as Error).message || error,
        });
    }
};
