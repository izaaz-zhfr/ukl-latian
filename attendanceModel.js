import db from "../config/db.js";

export const addAttendance = (user_id, status, callback) => {
  const sql = "INSERT INTO attendance (user_id, tanggal, status) VALUES (?, CURDATE(), ?)";
  db.query(sql, [user_id, status], callback);
};

export const getHistory = (user_id, callback) => {
  const sql = "SELECT * FROM attendance WHERE user_id=?";
  db.query(sql, [user_id], callback);
};

export const getSummary = (user_id, callback) => {
  const sql = `
    SELECT MONTH(tanggal) as bulan, COUNT(*) as jumlah_hadir
    FROM attendance WHERE user_id=? AND status='hadir'
    GROUP BY MONTH(tanggal)
  `;
  db.query(sql, [user_id], callback);
};
