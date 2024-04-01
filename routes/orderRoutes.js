const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/add-order', orderController.addOrder);
router.get('/get-order', orderController.getOrderDetails);

module.exports = router;
