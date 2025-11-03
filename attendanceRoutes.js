import express from "express";
import { presensi, riwayat, rekap } from "../controllers/attendanceController.js";
const router = express.Router();

router.post("/", presensi);
router.get("/history/:user_id", riwayat);
router.get("/summary/:user_id", rekap);

export default router;
