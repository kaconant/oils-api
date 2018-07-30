const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST ? process.env.MAIL_HOST : 'smtp.mailtrap.io',
    port: process.env.MAIL_PORT ? process.env.MAIL_PORT : 2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
}, () => {
});

transporter.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: 'views/emails',
    extName: '.hbs',
}));

router.post('/', (req, res, next) => {
    transporter.sendMail({
        from: `"${req.body.fromName}" <${req.body.fromEmail}>`, // sender address
        to: req.body.toEmail, // list of receivers
        subject: `Hey ${req.body.toName}, check this out`, // Subject line
        text: 'Hello world?', // plain text body
        template: 'notification',
        context: {
            ...req.body
        }
    }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.json({ 'status': info});
        console.log('Message sent: %s', info.messageId);
    });
});

module.exports = router;