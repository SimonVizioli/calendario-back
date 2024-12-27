import {
    countUserSchedules,
    createUserSchedule,
    deleteUserSchedule,
    getAllUserSchedules,
    getUserScheduleById,
    updateUserSchedule,
} from "../controllers/UserScheduleController";
import { Router } from "express";

const router = Router();

router.get("/:id", getUserScheduleById);
router.get("/", getAllUserSchedules);
router.post("/", createUserSchedule);
router.put("/:id", updateUserSchedule);
router.delete("/:id", deleteUserSchedule);
router.get("/count", countUserSchedules);

export default router;
