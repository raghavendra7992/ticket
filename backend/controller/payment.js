const Payment = require('../model/paymentmodel.js');

// Create Payment
const createPayment = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    // Perform necessary validation and authentication

    // Create a new payment
    const payment = await Payment.create({
      booking: bookingId,
      amount,
      paymentStatus: 'pending',
    });

    // Return the created payment
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create payment', error: error.message });
  }
};

// Get Payment by ID
const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;

    // Retrieve the payment from the database
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get payment', error: error.message });
  }
};

// Update Payment Status
const updatePaymentStatus = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const { paymentStatus } = req.body;

    // Update the payment status in the database
    const payment = await Payment.findByIdAndUpdate(
      paymentId,
      { paymentStatus },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update payment status', error: error.message });
  }
};

module.exports = {
  createPayment,
  getPaymentById,
  updatePaymentStatus,
};
