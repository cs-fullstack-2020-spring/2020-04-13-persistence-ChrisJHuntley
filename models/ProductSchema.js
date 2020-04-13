let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define a mongoose database schema
let ProductSchema = new Schema(
    {
        productID: Number,
        productName: String,
        price: Number,
        quantity: Number
    }
);

module.exports = mongoose.model('product',ProductSchema);