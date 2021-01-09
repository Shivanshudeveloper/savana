const express = require('express');
const router = express.Router();
// Nodemailer
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');
const shortid = require('shortid');

// Razorpay Instance
const razorpay = new Razorpay({
	key_id: 'rzp_test_ePCwuWSd3TNkj8',
	key_secret: 'OXWLRyJSRhh5bKNkQZ4khysH'
});

// Payment Page Check
router.get('/', (req, res) => {
    res.send('welcome payment')
});

// Razorpay Payment
// @POST Print Order Payment
// Payment
router.post('/printorderpayment', async (req, res) => {
    var { amount } = req.body;

    const payment_capture = 1
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}
	try {
		const response = await razorpay.orders.create(options)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
});

// Razor Pay Operations
// @Razorpay Request for Business Purchase
// PAYMENT
router.post('/paybusiness', async (req, res) => {
    const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}
	try {
		const response = await razorpay.orders.create(options)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
});

// Razor Pay Operations
// @Razorpay Request for Enterprise Purchase
// PAYMENT
router.post('/payenterprise', async (req, res) => {
    const payment_capture = 1
	const amount = 999
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}
	try {
		const response = await razorpay.orders.create(options)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
});

module.exports = router;