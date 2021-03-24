const mongoose = require('mongoose');
const Favoris = require('../models/favoris');
const Product = require('../models/product');

exports.getFavoris = (req, res, next) => {
  Favoris.find()
    .select('id product ')
    .populate('product', 'title')
    .exec()
    .then(docs => {
      res.status(200).json(docs)
    })
    .catch(err => {
      res.status(500).json({
        error : err
      })
    })
}

exports.postFavoris = ('/:id', (req, res, next) => {  
  Product.findOne({_id: req.params.id})
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: 'Product not found'
        })
      }
      const favoris = new Favoris({
        product: req.params.id,
        quantity: req.body.quantity
      })
      return favoris.save()
    })
    .then(result => {  
      console.log(result)
      res.status(201).json({
        message: "Favoris added",
        panier: result
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Product not found',
        error: err
      })
    })
});