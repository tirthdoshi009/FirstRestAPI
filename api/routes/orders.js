const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
})

router.post('/',(req,res,next)=>{
    console.log();
    const order = {ProductId : req.body.ProductId,Quantity : req.body.Quantity
    };
    console.log(order);
    res.status(201).json({
        message: order
    });
});

router.get('/:orderId',(req,res,next)=>{

    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
})

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched',
        orderId: req.params.orderId
    });
})

module.exports = router;