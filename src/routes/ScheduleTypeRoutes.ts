import {
    countScheduleTypes,
    createScheduleType,
    deleteScheduleType,
    getAllScheduleTypes,
    getScheduleTypeById,
    updateScheduleType,
} from "../controllers/ScheduleTypeController";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getScheduleTypeById);
router.get("/", getAllScheduleTypes);
router.post("/", createScheduleType);
router.put("/:id", updateScheduleType);
router.delete("/:id", deleteScheduleType);
router.get("/count", countScheduleTypes);

export default router;
