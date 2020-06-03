const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling get request'
    });
});


router.post('/',(req,res,next) =>{
    res.status(201).json({
        message: 'Handling POST request'
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