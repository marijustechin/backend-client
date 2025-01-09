const db = require("../db/db");
const bcrypt = require("bcryptjs");

class UserController {
  async createUser(req, res) {
    const { first_name, email, password } = req.body;

    // patikriniame, ar toks pastas naudojamas?
    const existingEmail = await db.query(
      `SELECT email FROM public."user" WHERE email=$1`,
      [email]
    );

    if (existingEmail.rowCount !== 0) {
      res.status(500).json({
        status: "failed",
        message: "Email already in use",
      });
    } else {
      // uzsifruojam slaptazodi
      const hashedPassword = await bcrypt.hash(password, 10);
      // irasom i db
      const newUser = await db.query(
        `INSERT INTO public."user"(first_name, email, password) VALUES ($1, $2, $3) returning *;`,
        [first_name, email, hashedPassword]
      );

      if (newUser) {
        res.status(200).json({
          status: "success",
          data: {
            id: newUser.rows[0].id,
            first_name: newUser.rows[0].first_name,
            email: newUser.rows[0].email,
          },
        });
      } else {
        res.status(500).json({
          status: "failed",
          message: "Unexpected error",
        });
      }
    }
  }

  getUser(req, res) {}

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async getUsers(req, res) {
    const users = await db.query(`SELECT * FROM "user"`);

    if (users.rows) {
      res.status(200).json({
        status: "success",
        data: users.rows,
      });
    } else {
      res.status(403).json({
        status: "failure",
        message: "No users",
      });
    }
  }

  async deleteUser(req, res) {
    res.status(200).json({
      status: "success",
      data: req.params.id,
    });
    const user = await db.query(`DELETE FROM "user" WHERE id=$1`, [
      req.params.id,
    ]);
  }

  updateUser(req, res) {}
}

module.exports = new UserController();
