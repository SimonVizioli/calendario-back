import {
    countSchedules,
    createSchedule,
    deleteSchedule,
    getAllSchedules,
    getScheduleById,
    updateSchedule,
} from "../controllers/ScheduleController";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getScheduleById);
router.get("/", getAllSchedules);
router.post("/", createSchedule);
router.put("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);
router.get("/count", countSchedules);

export default router;
