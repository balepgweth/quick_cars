// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Car = require('./models/Car');
const Testimonial = require('./models/Testimonial');
const Service = require('./models/Service');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quick_cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// ========== ROUTES ==========

// Get featured vehicles
app.get('/api/vehicles/featured', async (req, res) => {
    try {
        const cars = await Car.find({ featured: true });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search vehicles by name
app.get('/api/vehicles/search', async (req, res) => {
    try {
        const { q } = req.query;
        const cars = await Car.find({ name: { $regex: q, $options: 'i' } });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get testimonials
app.get('/api/testimonials', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Submit "contact us" message (extend as needed)
app.post('/api/contact', async (req, res) => {
    // Here you could save the contact message to DB or send an email
    res.json({ success: true, message: 'Thank you for contacting us!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});