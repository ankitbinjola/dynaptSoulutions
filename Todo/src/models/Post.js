const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  username: String,
  flag: String
})


module.exports = mongoose.model('Posts', postSchema);
