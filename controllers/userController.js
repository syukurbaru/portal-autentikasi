const { User } = require("../models");
const { generateToken} = require("../helpers/jsonWebToken");

class UserController {
  static async register(req, res) {
    const { name, email, password, gender } = req.body;
    try {
      let user = await User.create({
        name,
        email,
        password,
        gender,
      });
      res
        .status(201)
        .json({ id: user.id, email: user.email, gender: user.gender });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ where: { email, password } });
      if (!user) {
        throw { message: "Invalid username or password" };
      } else {
        let access_token = generateToken(user);
        res.status(201).json({ access_token });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findUsers(req, res) {
    try {
      let user = await User.findAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = UserController;
