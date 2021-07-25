const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.post(
    '/',
    productController.newProduct
);
router.get(
    '/',
    productController.getProducts
);
router.put(
    '/:id',
    productController.updateProduct
);
router.delete(
    '/:id',
    productController.removeProduct
);

module.exports = router;