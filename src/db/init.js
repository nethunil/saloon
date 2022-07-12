const mongoose = require("mongoose");

const connect = async function(){
    console.log("🚀 ~ file: init.js ~ line 5 ~ connect ~ process.env.MONGO", process.env.MONGO)
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`connection established ${conn.connection.host}`);
};

module.exports = connect;