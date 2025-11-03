import db from "../config/db.js";

export const createUser = (data, callback) => {
  const sql = "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)";
  db.query(sql, [data.nama, data.email, data.password], callback);
};

export const getUserById = (id, callback) => {
  db.query("SELECT id, nama, email FROM users WHERE id=?", [id], callback);
};

export const updateUser = (id, data, callback) => {
  db.query("UPDATE users SET nama=?, email=? WHERE id=?", [data.nama, data.email, id], callback);
};

export const getUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email=?", [email], callback);
};
