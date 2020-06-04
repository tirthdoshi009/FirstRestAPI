const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling get request'
    });
});


router.post('/',(req,res,next) =>{
    console.log(req.body.name);
    const Product = {
        name : req.body.name,
        productKey: req.body.key
    };
    res.status(201).json({
        message: Product
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