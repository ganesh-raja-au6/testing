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
const { getPostById } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "posts"
));

// Middlewares
const { isAuthorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "isAuthorized"
));

router.put("/:userId/:postId", isAuthorized, mood);

module.exports = router;
