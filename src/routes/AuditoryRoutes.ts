import { Router } from "express";
import {
    countAuditory,
    createAuditory,
    deleteAuditory,
    getAllAuditories,
    getAuditoryById,
    updateAuditory,
} from "../controllers/AuditoryController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.use(authenticateToken);

router.get("/:id", getAuditoryById);
router.get("/", getAllAuditories);
router.post("/", createAuditory);
router.put("/:id", updateAuditory);
router.delete("/:id", deleteAuditory);
router.get("/count", countAuditory);

export default router;
