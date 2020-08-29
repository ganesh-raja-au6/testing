const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      enum : ['like', 'dislike']
    },
    video : {
        type : mongoose.Schema.ObjectId,
        ref : "Post",
        required : true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("Comment", commentSchema);
