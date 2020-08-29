// NPM modules
const [path, _] = [require("path"), require("lodash")];
const { sign, verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const ErrorResponse = require(path.join(
  __dirname,
  "..",
  "utils",
  "errorResponse"
));

// Authentication mailer
const { authMailer, resetPasswordMailer } = require(path.join(
  __dirname,
  "..",
  "utils",
  "mailer"
));
// asyncHandler
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Models
const User = require(path.join(__dirname, "..", "models", "User"));

// @desc      POST SIGNUP
// @route     POST /api/v1/auth/signup
// @access    Public
exports.signup = asyncHandler(async (req, res, next) => {
  const { email, password, username } = req.body;
  const token = await sign(
    { email, password, username },
    process.env.JWTSECRET,
    { expiresIn: "10m" }
  );
  authMailer(email, token);
  return res.json({
    success: true,
    message: "A verification email has been sent to your email. Please verify.",
  });
});