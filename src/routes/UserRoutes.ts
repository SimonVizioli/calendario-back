import {
    countUsers,
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    registerUser,
    updateUser,
} from "../controllers/UserController";
import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
//Basic Crud Endpoints
router.get("/:id", authenticateToken, getUserById);
router.get("/", authenticateToken, getAllUsers);
router.post("/", authenticateToken, createUser);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);
router.get("/count", authenticateToken, countUsers);

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
