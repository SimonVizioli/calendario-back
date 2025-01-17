import { Request, Response } from "express";
import Auditory from "../models/Auditory";

export const getAuditoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Auditory ID is required" });
        }

        const auditory = await Auditory.findByPk(id);
        if (auditory) {
            res.status(200).json(auditory);
        } else {
            res.status(404).json({ message: "Auditory not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving auditory",
            error,
        });
    }
};

export const getAllAuditories = async (req: Request, res: Response) => {
    try {
        const { user_id, schedule_id } = req.query;

        // Si se pasa un eventId, filtra los resultados
        const filter = user_id
            ? { where: { user_id: user_id } }
            : schedule_id
            ? { where: { schedule_id: schedule_id } }
            : {};

        const auditorys = await Auditory.findAll(filter);

        return res.status(200).json(auditorys);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving auditorys",
            error,
        });
    }
};

export const createAuditory = async (req: Request, res: Response) => {
    try {
        let { user_id } = req.body;

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const newAuditory = await Auditory.create(req.body);
        res.status(201).json(newAuditory);
    } catch (error) {
        res.status(500).json({
            message: "Error creating auditory",
            error,
        });
    }
};

export const updateAuditory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Auditory ID is required" });
        }

        // Excluir campos no permitidos para actualización
        const { id: bodyId, ...updateFields } = req.body;

        const [updated] = await Auditory.update(updateFields, {
            where: { id },
        });
        if (updated) {
            const updatedAuditory = await Auditory.findByPk(id);
            res.status(200).json(updatedAuditory);
        } else {
            res.status(404).json({ message: "Auditory not found" });
        }
    } catch (error: any) {
        console.error("Error updating event:", error);
        return res.status(500).json({
            message: "Error updating event",
            error: error.message || error,
        });
    }
};

export const deleteAuditory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar entrada
        if (!id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const deleted = await Auditory.destroy({
            where: { id },
        });
        if (deleted) {
            res.status(204).json({ message: "Auditory deleted" });
        } else {
            res.status(404).json({ message: "Auditory not found" });
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

export const countAuditory = async (req: Request, res: Response) => {
    try {
        const count = await Auditory.count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({
            message: "Error counting auditorys",
            error,
        });
    }
};
