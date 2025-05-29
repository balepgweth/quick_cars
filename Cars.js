// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    year: Number,
    price: Number,
    image: String,
    mileage: Number,
    transmission: String,
    fuel: String,
    color: String,
    engine: String,
    horsepower: String,
    seating: Number,
    features: [String],
    featured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Car', carSchema);