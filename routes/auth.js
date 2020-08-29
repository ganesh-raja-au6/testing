const [router, path] = [require("express").Router(), require("path")];

// controllers
const {
  signup,
  signin,
  signout,
  verifyToken,
  forgotPassword,
  changePassword,
  resetPassword,
} = require(path.join(__dirname, "..", "controllers", "auth"));

// Middlewares
const { signupValidation, changePasswordValidation, resetPasswordValidation} = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "authValidation"
));
const { emailCheck } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "emailExists"
));
const { isAuthorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "isAuthorized"
));

router.post("/signup", signupValidation, emailCheck, signup);