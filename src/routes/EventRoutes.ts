import { Router } from "express";
import {
    countEvents,
    createEvent,
    deleteEvent,
    getAllEvents,
    getEventById,
    updateEvent,
} from "../controllers/EventController";

const router = Router();

router.get("/:id", getEventById);
router.get("/", getAllEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/count", countEvents);

export default router;
