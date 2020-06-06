const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const productSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    productKey: String
}
);

module.exports = mongoose.model('Product', productSchema);