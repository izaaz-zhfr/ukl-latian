import { addAttendance, getHistory, getSummary } from "../models/attendanceModel.js";

export const presensi = (req, res) => {
  const { user_id, status } = req.body;
  addAttendance(user_id, status, (err) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "Presensi berhasil dicatat" });
  });
};

export const riwayat = (req, res) => {
  getHistory(req.params.user_id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result);
  });
};

export const rekap = (req, res) => {
  getSummary(req.params.user_id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result);
  });
};
