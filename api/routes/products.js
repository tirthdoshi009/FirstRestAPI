const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling get request'
    });
});


router.post('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling POST request'
    });
});

router.get('/:productId', (req,res,next)=>{

    const id = req.params.productId;
    if(id === 'special'){
         res.status(200).json({
             message: 'You discoverd the special id',
             id:id
         });
    }
    else{
        res.status(200).json({
            message: 'Your id is not special enough'
        });
    }
})

module.exports = router;