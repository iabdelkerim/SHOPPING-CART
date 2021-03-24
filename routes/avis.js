const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const avisCtrl = require('../controllers/avis');


router.get('/',avisCtrl.getAllAvis);

router.post('/:id',avisCtrl.postAvisById);

router.get('/pop/:id',avisCtrl.PopulateProducts);


module.exports = router;