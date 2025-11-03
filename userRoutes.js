import express from "express";
import { addUser, getUser, editUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/", addUser);
router.get("/:id", getUser);
router.put("/:id", editUser);

export default router;
