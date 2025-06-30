const express=require('express')
const mongoose=require('mongoose')
const app = express()
const Product = require('./models/product.model.js');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const productRoute = require('./routes/product.route.js');
//routes
app.use("/api/products", productRoute);
app.get('/', (req, res)=>{
    res.send("hello from node api server");
});

mongoose.connect("mongolink")
.then(()=>{
    console.log("connected to database!");
    app.listen(3000, ()=>{

    console.log('server is running on port 3000');
    });
})
.catch(()=>{
    console.log("connection failed!");});
