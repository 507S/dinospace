const jwt = require('jsonwebtoken');

const generateToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, 'brucewayneisbatman', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;