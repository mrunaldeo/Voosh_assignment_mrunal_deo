const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    subTotal: Number,
    phoneNumber: String,
});

module.exports = mongoose.model('Order', orderSchema);
