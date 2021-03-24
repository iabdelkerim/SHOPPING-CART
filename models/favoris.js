const mongoose = require('mongoose')
const Product = require("./product");
const favorisSchema = mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

module.exports = mongoose.model('favoris', favorisSchema);