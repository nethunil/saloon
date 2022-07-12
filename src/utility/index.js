const nodemailer = require("nodemailer");

const SMTPTransport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    } 
});

async function sendMail(to,subject,text){
    return await SMTPTransport.sendMail({
        from: process.env.USER,
        to,
        subject,
        text 
    })
};

module.exports={sendMail};