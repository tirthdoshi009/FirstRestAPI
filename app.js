const express = require('express');

const app = express();

const morgan = require('morgan');


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

//Route the requests accordingly
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

//If we can't route to the above 2, then there is some error, we handle that error

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.status
        }
    })
})

module.exports = app;