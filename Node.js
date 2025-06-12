// Use something like Nodemailer on the server
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { fullName, email, phone, subject, message } = JSON.parse(event.body);

   require('dotenv').config(); // Load from .env

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject,
        html: `<p>Full Name: ${fullName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
    });

    return { statusCode: 200, body: JSON.stringify({ message: "Email sent" }) };
};
