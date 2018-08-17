const express = require('express');
const router = express.Router();
const models = require ('../../models');

router.get('/',
  function(req, res) {
    models.Oil.findAll()
    .then((oils) => {
      res.json(oils)
    })
  }
);

module.exports = router;