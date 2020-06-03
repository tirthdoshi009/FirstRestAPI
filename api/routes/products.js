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

module.exports = router;