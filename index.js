// let express = require('express');
// let app = express();
// app.use(express.json())



// app.get('/products', (req, res) => {
//     res.send(
//         Products =[ {
//             'productID': 'Number',
//             'productName': 'String',
//             'price': 'Number',
//             'quantity': 'Number',
//         }])
// })
// app.get('/products/:id', (req, res)=>{
//     res.send(`productID number ${req.params.id}`)
// })
// app.post ('/products/post', (req, res)=>{
//     res.send(`${Products}`)
// })


// // allow server to listen on port 
// app.listen(8637, () => {
//     console.log('Listening on port 8637')
// })

// ---------------------------------------------------------------------------
let express = require('express');
let app = express();
app.use(express.json())

// database setup
let mongoose = require('mongoose')
let mongoDB = "mongodb+srv://student:C0d3Cr3w@cluster0-2wftu.mongodb.net/cs_database?retryWrites=true&w=majority"
console.log(`connecting to mongo at ${mongoDB}`)
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
let db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let api = require('./routes/api')
app.use('/api', api);

let portNumber = 2424;
app.listen(portNumber, () => {
    console.log(`listening to ${portNumber}`)
});
