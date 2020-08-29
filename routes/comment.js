// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// controllers
const { comment } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "comment"
));
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

router.put("/:userId/:postId", isAuthorized, comment);

module.exports = router;
