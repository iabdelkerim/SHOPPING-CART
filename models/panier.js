const mongoose = require('mongoose')
const Product = require("./product");
const panierSchema = mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('Panier', panierSchema);