const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String
  
});
const Product = mongoose.model('user',ProductSchema)
module.exports = Product;