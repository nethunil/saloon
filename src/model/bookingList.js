const mongoose = require("mongoose");

const bookingList = mongoose.model(
    "bookingList", 
    new mongoose.Schema(
        {
            service: {
                type: String,
                required: true,
            },
            fName: {
                type: String,
                required: true,
            },
            lName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            time: {
                type: String,
                required: true,
            },
        },
        {timestamps: true}
    )
);

module.exports = bookingList;