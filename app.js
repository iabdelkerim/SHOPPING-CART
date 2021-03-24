const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const panierRoutes = require('./routes/paniers');
const favorisRoutes = require('./routes/favoris');
const avisRoutes = require('./routes/avis');



mongoose.connect('mongodb+srv://esilv:esilv@cluster0.vc6hp.mongodb.net/ibrahim?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !'));



app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static( path.join(__dirname, 'images')));

app.use('/api/products',productRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/paniers', panierRoutes);
app.use('/api/favoris',favorisRoutes);
app.use('/api/avis',avisRoutes);







module.exports = app;
