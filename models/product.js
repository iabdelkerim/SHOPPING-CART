const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    avis: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avis'
    }]
});

module.exports = mongoose.model('Product', productSchema);