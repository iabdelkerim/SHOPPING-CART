const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const favCtrl = require('../controllers/favoris');


router.get('/',favCtrl.getFavoris);

router.post('/:id',favCtrl.postFavoris);



module.exports = router;