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
const Post = require(path.join(__dirname, "..", "models", "Post"));
const Mood = require(path.join(__dirname, "..", "models", "mood"));

exports.mood = asyncHandler((req, res, next) => {
    const post = req.post
    const user = req.user
    const mood = new Mood({title : req.body.title, user : req.user, post : req.post})
    await mood.save()
    return res.json({success : true, message: 'post liked'})
})