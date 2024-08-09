const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


router.post('/send', async (req, res) => {
    const { firstname, lastname, email, message } = req.body;


    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email user or password not set in environment variables.');
        return res.status(500).send('Internal Server Error: Email configuration is missing.');
    }


    // Set up Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    // Set up email options
    let mailOptions = {
        from: email,
        to: 'logdog2220@gmail.com',
        subject: `Message from ${firstname} ${lastname}`,
        text: message
    };


    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error: Unable to send email.');
    }
});


module.exports = router;
