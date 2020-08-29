// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// controllers
const {
  getAllPosts,
  createPost,
  getPostsByUser,
  getPostById,
  deletePost,
  updatePost,
} = require(path.join(__dirname, "..", "controllers", "posts"));
const { getUserById } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "users"
));

// Middlewares
const { validUser } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validUser"
));
const { isAuthorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "isAuthorized"
));

router.put("/", isAuthorized, mood);

module.exports = router;