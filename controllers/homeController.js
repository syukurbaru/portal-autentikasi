class HomeController {
  static async home(req, res) {
    res.status(200).json({ message: "Portal Autentikasi, OK!" });
  }
}

module.exports = HomeController;
