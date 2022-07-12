const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const dbConnection = require("./db/init")
const server = express();

var cors = require('cors')
server.use(cors({
    origin: '*'
}));

const router = require("./route");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api', router)

dbConnection();

server.listen(3000, function(){
    console.log("Server running...")
});