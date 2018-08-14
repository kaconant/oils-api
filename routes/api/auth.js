const express = require('express');
const router = express.Router();
const passport = require('passport');
// const models = require ('../models')
// const ensureAuthenticated = require('../auth').ensureAuthenticated;
const bodyParser = require('body-parser');

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

module.exports = router;