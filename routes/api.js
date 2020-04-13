// mongodb+srv://student:<password>@cluster0-2wftu.mongodb.net/cs_database?retryWrites=true&w=majority
let express = require('express');
let router = express.Router();
//  Get reference to our model
let ProductCollection = require('../models/ProductSchema')




let product_array = [
    {
        productID: 2,
        productName: 'product a',
        price: 14,
        quantity: 44,
    },
    {
        productID: 8,
        productName: 'product b',
        price: 2,
        quantity: 19,
    },
    {
        productID: 1,
        productName: 'product c',
        price: 3,
        quantity: 9,
    }

]

router.get('/', (req, res) => {
    // res.send(product_array)
    ProductCollection.find({}, (errors, result) => {
        if (errors) {
            res.send(errors)
        }
        else {
            res.send(result)
        }
    })
})
router.get('/:product_id', (req, res) => {
    console.log('GOT GET');
    console.log( req.params.product_id)
    ProductCollection.findOne({productID: req.params.product_id}, (errors, result) => {
            if (errors) {
                res.send(errors)
            }
            else {
                res.send(result)
            }
        })
}
)
router.post('/', (req, res) => {
    // res.send(req.body)
console.log('Called post');
    ProductCollection.create(
        {

            productID: req.body.productID,
            productName: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity
        }, (errors, result) => {
            if (errors) {
                res.send(errors)
            }
            else {
                res.send(result)
            }
        })

})



module.exports = router;