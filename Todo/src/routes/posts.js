const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('we are on posts');
});

router.post('/', (req, res) => {
  const post = new Post({
    username: req.body.username,
    flag: req.body.flag
  });


  post.save().then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  })
})

module.exports = router ;
