const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

function generateToken(data) {
  const { email, id } = data;
  return jwt.sign({ email, id }, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = {
  generateToken,
  verifyToken,
};
