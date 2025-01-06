import {
    countUserSchedules,
    createUserSchedule,
    deleteUserSchedule,
    getAllUserSchedules,
    getUserScheduleById,
    updateUserSchedule,
} from "../controllers/UserScheduleController";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getUserScheduleById);
router.get("/", getAllUserSchedules);
router.post("/", createUserSchedule);
router.put("/:id", updateUserSchedule);
router.delete("/:id", deleteUserSchedule);
router.get("/count", countUserSchedules);

export default router;
