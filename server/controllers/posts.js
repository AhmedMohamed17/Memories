import PostMessageModel from "../models/PostMessages";

export const getPosts = async (req, res) => {
  res.send("This workes!");
  try {
    const postMessages = await PostMessageModel.find();
    res.status(200).json(postMessages);
    console.log(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;

  const newPost = new PostMessageModel(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
