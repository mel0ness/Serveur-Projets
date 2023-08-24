
const PostModel = require("../models/post.model")

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find()
    res.status(200).json(posts)
}

