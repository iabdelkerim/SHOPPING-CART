const mongoose = require('mongoose');
const Avis = require('../models/avis');
const Product = require('../models/product');


exports.getAllAvis = (req,res,next) => {
    Avis.find({})
        .then(function(avis) {
            res.json(avis);
    })
        .catch(function(err) {
            res.json(err);
    })
};

// Coontrollers for creating a new Avis and updating Product "Avis" field with it
exports.postAvisById = (req, res,next) => {
     Avis.create(req.body)
      .then(function(avis) {
        return Product.findOneAndUpdate({ _id: req.params.id }, {$push: {avis: avis._id}}, { new: true });
      })
      .then(function(product) {
        res.json(product);
      })
      .catch(function(err) {
        res.json(err);
      });
  };

// Controllers for retrieving a Product by id and populating it's Avis.
exports.PopulateProducts = (req, res,next) => {
    Product.findOne({ _id: req.params.id })
      .populate("avis")
      .then(function(Product) {
        res.json(Product);
      })
      .catch(function(err) {
        res.json(err);
      });
  };