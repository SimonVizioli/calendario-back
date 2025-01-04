import {
    countUsers,
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/count", countUsers);

export default router;
