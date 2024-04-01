const Order = require('../models/Order');

exports.addOrder = async (req, res) => {
    try {
        const { userId, subTotal, phoneNumber } = req.body;

        const order = new Order({
            userId,
            subTotal,
            phoneNumber,
        });

        await order.save();
        res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.getOrderDetails = async (req, res) => {
    try {
        const { userId } = req.query;

        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};