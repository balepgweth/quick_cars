// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: String,
    icon: String, // e.g., 'fas fa-car'
    description: String
});

module.exports = mongoose.model('Service', serviceSchema);