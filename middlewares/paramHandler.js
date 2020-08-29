const path = require("path");
// Error Handler
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
const [User, Video] = [
  require(path.join(__dirname, "..", "models", "User")),
  require(path.join(__dirname, "..", "models", "video")),
];