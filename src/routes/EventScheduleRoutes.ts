import {
    countEventSchedules,
    createEventSchedule,
    deleteEventSchedule,
    getAllEventSchedules,
    getEventScheduleById,
    updateEventSchedule,
} from "../controllers/EventScheduleController";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getEventScheduleById);
router.get("/", getAllEventSchedules);
router.post("/", createEventSchedule);
router.put("/:id", updateEventSchedule);
router.delete("/:id", deleteEventSchedule);
router.get("/count", countEventSchedules);

export default router;
