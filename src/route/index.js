const express = require("express");
const bookingController = require("../controller/bookingController")

const router = express.Router();

router.post('/reservation', async function(req,res){
    await bookingController.create(req,res);   
})

module.exports = router;