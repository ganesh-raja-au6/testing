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
const Comment = require(path.join(__dirname, "..", "models", "comment"));

exports.comment = asyncHandler((req, res, next) => {
    const post = req.post
    const user = req.user
    const comment = new Comment({title : req.body.title, user, post})
    await comment.save()
    return res.json({success : true, message: 'post liked'})
})