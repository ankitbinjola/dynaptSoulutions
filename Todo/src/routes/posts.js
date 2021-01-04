const express = require('express');
const Post = require('../models/Post');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const schema = {
  name: Joi.string().min(6).required,
  email: Joi.string().min(6).required,
  password: Joi.string().min(6).required
}




const router = express.Router();

router.get('/', (req, res) => {
  res.send('we are on posts');
});

router.post('/register', async(req, res) => {
//hash password
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(req.body.password, salt);
//create a new user
  const post = new Post({
    name: req.body.name,
    email: req.body.email,
    password: hashpassword
  });
  post.save().then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  })

});

//login

router.post('/login', async(req, res) => {

  //check wheter email id exist in the database
const user = await post.findOne({ email: req.body.email });
if(!user) return res.status(400).send('Email wrong');
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send('Invalid password')
res.send('logged In');

})



module.exports = router ;
