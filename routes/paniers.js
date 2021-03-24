const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const panierController = require('../controllers/paniers');


router.get('/',panierController.getAllCart);

router.post('/:id',panierController.postInCart);



module.exports = router;