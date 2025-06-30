const express=require('express');
const Product=require('../models/product.model.js');
const router=express.Router();
const {getproducts, getproduct, createProduct, updateProduct, deleteProduct}=require('../controllers/product.controller.js');
router.get('/', getproducts);
router.get('/:id', getproduct);
router.post("/", createProduct);
// Update a product
router.put('/:id', updateProduct);
// Delete a product
router.delete('/:id', deleteProduct);
module.exports = router;