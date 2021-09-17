const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
