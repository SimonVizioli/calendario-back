import {
    countEventSchedules,
    createEventSchedule,
    deleteEventSchedule,
    getAllEventSchedules,
    getEventScheduleById,
    updateEventSchedule,
} from "../controllers/EventScheduleController";
import { Router } from "express";

const router = Router();

router.get("/:id", getEventScheduleById);
router.get("/", getAllEventSchedules);
router.post("/", createEventSchedule);
router.put("/:id", updateEventSchedule);
router.delete("/:id", deleteEventSchedule);
router.get("/count", countEventSchedules);

export default router;
