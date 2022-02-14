import pool from "../../config/db";
import bcrypt from "bcryptjs";

const getAllUsers = (req, res) => {
  res.send("Hello");
};

const registerUser = (req, res) => {
  try {
    let nu = { ...req.body.data };
    let out = {};
    nu.password = bcrypt.hashSync(nu.password, 10);
    const sql = `INSERT INTO users (username, fname, lname, password, email, age) VALUES ('${nu.username}', '${nu.fName}', '${nu.lName}', '${nu.password}', '${nu.email}', '${nu.age}')`;
    pool.query(sql, (err, rows, fields) => {
      out = { err, rows, fields };
      res.status(200).json(out);
    });
  } catch (err) {
    console.error("error saving user to database: " + err);
    res.status(500).json(err);
  }
};

export { getAllUsers, registerUser };
