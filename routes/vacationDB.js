const express = require('express');
const VacationCRUD = require('../models/vacationcrud')
const VacationModel = require('../models/vacationmodel');

const router = express.Router();


router.post('/vacationDB', (req, res) => {
    console.log('req: ',req.body)
    
    VacationCRUD.saveVacation(req.body)
    
    res.redirect('/')
    return;
});


module.exports = router;
