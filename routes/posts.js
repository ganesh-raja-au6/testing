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
const { postsValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validatePosts"
));
const { validUser } = require(path.join(__dirname, "..", "middlewares", "validUser"));
const { isAuthorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "isAuthorized"
));

router.get("/:userId", getPostsByUser);

router.get("/:postId", getPostById);

router.get("/", getAllPosts);

router.delete("/:postId", isAuthorized, validUser, deletePost);

router.put("/:postId", isAuthorized, validUser, updatePost);

router.post("/", isAuthorized, createPost, postsValidation);

router.param("userId", getUserById);

router.param("postId", getPostById);

module.exports = router;