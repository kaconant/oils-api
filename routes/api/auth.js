const express = require('express');
const router = express.Router();
const passport = require('passport');
// const ensureAuthenticated = require('../auth').ensureAuthenticated;
const bodyParser = require('body-parser');
const models = require('./models')
const bcrypt = require('bcrypt');

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

// router.post('/register',
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     // uses sequelize to do magic to make it connect
    
//     let salt = bcrypt.genSaltSync(10)
//     models.User.create({
//       firstname: req.body.firstname,
//       lasname: req.body.lastname,
//       username: req.body.email,
//       password: bcrypt.hashSync(req.body.password, salt)
//     })
//     .then((data) => {
//       res.redirect('/login')
//     })
//   });

module.exports = router;