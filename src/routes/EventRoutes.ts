import { Router } from "express";
import {
    countEvents,
    createEvent,
    deleteEvent,
    getAllEvents,
    getEventById,
    updateEvent,
} from "../controllers/EventController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getEventById);
router.get("/", getAllEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/count", countEvents);

export default router;
