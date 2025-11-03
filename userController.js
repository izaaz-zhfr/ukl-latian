import bcrypt from "bcryptjs";
import { createUser, getUserById, updateUser } from "../models/userModel.js";

export const addUser = (req, res) => {
  const { nama, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  createUser({ nama, email, password: hash }, (err) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "User berhasil ditambahkan" });
  });
};

export const getUser = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result[0]);
  });
};

export const editUser = (req, res) => {
  const id = req.params.id;
  updateUser(id, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "User berhasil diubah" });
  });
};
