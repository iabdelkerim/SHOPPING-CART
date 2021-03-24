const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const productCtrl = require('../controllers/products');
const router = express.Router();

// Vos routes ici

router.post('/',auth,multer, productCtrl.createProduct); 
router.get('/:id',auth, productCtrl.getOneProduct); 
router.get('/',auth, productCtrl.getAllProduct); 
router.put('/:id',auth,multer, productCtrl.updateProduct); 
router.delete('/:id',auth, productCtrl.deleteProduct);



module.exports = router;

