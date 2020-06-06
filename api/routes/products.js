const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product')

router.get('/:productId',(req,res,next) =>{
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log("From Database: "+ doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err});
    }
    );
}); 

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling get request'
    });
}); 


router.post('/',(req,res,next) =>{
    console.log(req.body.name);
    const product = new Product( {
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        productKey: req.body.productKey
    });
    product.save().then(result=> {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: product
    });
});

router.patch('/:productId', (req,res,next)=>{
    res.status(200).json({
        message: 'Product Updated'
    })
});


router.delete('/:productId', (req,res,next)=>{
    
    res.status(200).json({
        message: 'Product Deleted'
    })
});

module.exports = router;