const [path, formidable, fs, _] = [
    require("path"),
    require("formidable"),
    require("fs"),
    require('lodash')
  ];
  const Posts = require(path.join(__dirname, "..", "models", "Posts"));
  
  exports.getPostById = async (req, res, next, id) => {
    Posts.findById(id).exec((err, post) => {
      if (err || !post)
        return res
          .status(500)
          .json({ success: false, error: `No valid Post found.` });
      req.post = post;
      next();
    });
  };
  
  exports.getAllPosts = async (req, res) => {
    const posts = await Posts.find()
      .populate("user", "_id username")
      .select("_id title body");
    if (!posts)
      return res.status(500).json({ success: false, error: "No posts found." });
    return res.json({ success: true, count: posts.length, posts });
  };
  
  exports.createPost = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err)
        return res
          .status(500)
          .json({ success: false, error: `No valid photo found.` });
      let post = new Posts(fields);
      post.user = req.user;
      if (files.photo) {
        post.photo.data = fs.readFileSync(files.photo.path);
        post.photo.contentType = files.photo.type;
      }
      post.save().then((data) => {
        return res.json({ success: true, posts: data });
      });
    });
    //   const { title, body } = req.body;
    //   const post = await new Posts({ title, body, user: req.user._id });
  
    //     .catch((error) => {
    //       return res.status(500).json({ success: false, error });
    //     });
  };
  
  exports.getPostsByUser = async (req, res, next) => {
    const user = req.profile;
    const posts = await Posts.find({ user: user._id });
    if (!posts || posts.length === 0) {
      return res.status(404).json({ success: false, error: "No posts found." });
    }
    return res.status(200).json({ success: true, length: posts.length, posts });
  };
  
  exports.deletePost = async (req, res, next) => {
    const post = req.post;
    Posts.deleteOne(post).exec((err, data) => {
      if (err)
        return res.status(500).json({ success: false, error: err.message });
      return res
        .status(200)
        .json({ success: true, message: `Post removed successfully.` });
    });
  };
  
  exports.updatePost = async (req, res) => {
    const post = req.post
    post = _.extend(post, req.body)
    post.save((err) => {
      if(err) return res.status(500).json({ success: false, error : err.message})
      return res.json({ success: true, message : `Post updated successfully.`})
    })
  }