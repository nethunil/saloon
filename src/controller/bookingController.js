const bookingModel = require("../model/bookingList");
const mailer = require("../utility")
module.exports.create = async function(req,res){  
    try {
        const { service, fName, lName, email, date, time } = req.body;  
        console.log("🚀 ~ file: bookingController.js ~ line 8 ~ module.exports.create=function ~ req.body", req.body)

        const resp = await bookingModel.create({
            service, 
            fName, 
            lName, 
            email, 
            date, 
            time,
        });

        await mailer.sendMail(email,"Your Reservation is Confirmed",
        `Saloon ABC

        Booked date - ${date}
        booked Time - ${time}
        
        Thank You!`);

        res.status(201).send({
            success: true,
            data: resp,
        });
    } catch (error) {
        console.log("🚀 ~ file: bookingController.js ~ line 24 ~ module.exports.create=function ~ error", error)
        return res.status(500).send({
            message: error
        });
    }
};