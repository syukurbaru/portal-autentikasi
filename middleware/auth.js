const { verifyToken } = require("../helpers/jsonWebToken");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  const { access_token } = req.headers;

  try {
    const userData = verifyToken(access_token);
    let user = await User.findOne({
      where: {
        email: userData.email,
      },
    });

    if (user) {
      req.userData = userData;
      next();
    } else {
      throw { message: "User not authenticated" };
    }
  } catch (error) {
    res.status(401).json({ message: "User not authenticated" });
  }
};

module.exports = authentication;
