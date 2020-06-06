const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product')

router.get('/:productId',(req,res,next) =>{
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log("From Database: "+ doc);
        if(doc){
            res.status(200).json(doc);
        }
        else{
            res.status(404).json({
                error: "Document not found"
            });
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err});
    }
    );
}); 

router.get('/',(req,res,next) =>{
    Product.find().exec().then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
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
        res.status(201).json({
            message: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
   
});

router.patch('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.updateOne({_id : id}, {$set: updateOps})
    .exec().
    then(result =>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});


router.delete('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    Product.remove({_id: id}).exec().then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err =>{
        error: err
    });
});

module.exports = router;