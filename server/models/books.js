//MIDTERM TEST -
//Student: Gurvir Singh 301108852
//Course: Web Application Development SEC.004  COMP229004-2020F
//Date: October 29, 2020 -->

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
