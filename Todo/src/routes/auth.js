const express = require('express');
// const Post = require('../models/Post');
const user = require('../models/users');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('we are on auth');
// });

router.post('/', (req, res) => {
  res.send('Register');
  const users = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  post.save().then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  })

})

// router.post('/', (req, res) => {
//   // const post = new Post({
//   //   username: req.body.username,
//   //   flag: req.body.flag
//   // });


//   // router.post('/register', (req, res) => {
//   //   res.send('Register');
//   // })

//   router.post('/login');

//   post.save().then(data => {
//     res.json(data);
//   })
//   .catch(err => {
//     res.json(err);
//   })
// })

module.exports = router ;
