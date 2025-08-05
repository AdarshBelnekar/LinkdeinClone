import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

const createPost = async (req, res) => {
  try {

    
    const { content } = req.body;
    const userId = req.user.id;

    const post = await postModel.create({
      content,
      author: userId,
    });

    res.json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find().populate("author", "name email").sort({ timestamp: -1 });
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
};

export { createPost, getAllPosts };
