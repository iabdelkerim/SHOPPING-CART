const Product = require('../models/product');
const fs = require('fs');

exports.createProduct = (req, res, next) => { 
    delete req.body._id;
    const product = new Product({
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }); 
    product 
        .save()
        .then(() => res.status(201).json({message: 'produit ajouté'}))
        .catch(error => res.status(400).json({error})); 

};

exports.getOneProduct = ('/:id', (req, res, next) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(404).json({error}));
});

exports.getAllProduct = ('/', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
});

exports.updateProduct = (req, res, next) => { 
    const productObject = req.file ?
    {
        ...req.body,
    imageUrl: 
    `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Product.updateOne({_id: req.params.id}, {...productObject, _id:
    req.params.id})
    .then(() => res.status(200).json({message: 'Produit modifié' }))
    .catch(error => res.status(400).json({error}));
    };

exports.deleteProduct = (req, res, next) => { 
    Product.findOne({_id: req.params.id})
        .then((product) => {
            const filename = product.imageUrl.split('/images/')[1]; 
            fs.unlink(`images/${filename}`, () => {
                Product.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({message:'Produit supprimé'}))
                    .catch(error => res.status(400).json({ error
                }));
            });
        })
        .catch(error => res.status(500).json({error})); 
};
