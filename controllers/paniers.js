const mongoose = require('mongoose');
const Panier = require('../models/panier');
const Product = require('../models/product');

exports.getAllCart = (req, res, next) => {
  Panier.find()
    .select('id product quantity')
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

exports.postInCart = ('/:id', (req, res, next) => {
    
  Product.findOne({_id: req.params.id})
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: 'Product not found'
        })
      }
      const panier = new Panier({
        product: req.params.id,
        quantity: req.body.quantity
      })
      return panier.save()
    })
    .then(result => {  
      console.log(result)
      res.status(201).json({
        message: "Panier added",
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
