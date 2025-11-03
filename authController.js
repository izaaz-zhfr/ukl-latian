import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../models/userModel.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).json({ message: "User tidak ditemukan" });

    const user = result[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Password salah" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login berhasil", token });
  });
};
