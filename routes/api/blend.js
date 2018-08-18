const express = require('express');
const router = express.Router();
const Axios = require('axios');
const bodyParser = require('body-parser');

// router.post at '/'
// handle a new row with sequelize in the database 

router.post('/users/:user', (req, res, next) => {
  console.log(req.user);
  models.blend.create({
    blendName: req.body.name,
    baseOil: req.body.baseOil,
    middleOil: req.body.middleOil,
    topOil: req.body.topOil,
    createdAt: req.body.createdAt
  })  
  .then(blend => {
    res.redirect('/api/blend');
  })
})
