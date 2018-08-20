const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../../models');

router.post('/new', (req, res, next) => {
  console.log(req.user);
  console.log(req.body);
  res.json('okay');
  models.Blend.create({
    blendName: req.body.name || 'defaultName',
    baseOil: req.body.baseOil,
    middleOil: req.body.middleOil,
    topOil: req.body.topOil,
    mood: req.body.mood,
    UserId: req.user.id,
  }).then(blend => {
    res.json('okay');
    // redirect to home page or whatever
  }).catch((err) => {
    console.log(err)
  })
})

router.get('/user', (req, res, next) => {
  models.Blend.findAll({
    where: {
      UserId: req.user.id
    }
  }).then((blends) => {
    res.json(blends)
  })
})

module.exports = router;