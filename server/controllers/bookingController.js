const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
    const { movieId, userId, seats, showtime, totalPrice } = req.body;

    const booking = new Booking({
        movieId,
        userId,
        seats,
        showtime,
        totalPrice,
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createBooking };
