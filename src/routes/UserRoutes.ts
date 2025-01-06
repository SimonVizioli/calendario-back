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

const router = Router();
//Basic Crud Endpoints
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/count", countUsers);

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
