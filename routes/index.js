const express = require('express');
const VacationModel = require('../models/vacationmodel');
const { default: cards } = require('../public/javascripts/cards');
const { makeEditClickable, makeRemoveClickable } = require('../public/javascripts/buttons')
const { deleteVacation } = require('../models/vacationcrud')
const router = express.Router();
const { requiresAuth } = require('express-openid-connect')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const cards = await VacationModel.find();
  try {

    res.render('index', { 
      cards: cards,
      deleteVacation : deleteVacation,
      isAuthenticated: req.oidc.isAuthenticated()
     })
  }
  catch (e) {
    console.log(e.message)
    res.status(500).send(e.message)
  }
});

module.exports = router;
