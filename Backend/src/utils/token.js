const jwt = require("jsonwebtoken");
// const User = require("../modules/user");

const { secretKey } = require("./tokenkey");

function createToken(user) {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    secretKey,
    { expiresIn: "6h" }
  );
  return token;
}

module.exports = { createToken };
