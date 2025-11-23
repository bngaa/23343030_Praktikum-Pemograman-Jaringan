const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const { EMAIL, PASSWORD } = require('../routes/env.js');

const signup = async (req, res) => {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    let message = {
        from: '"Mailer App" <foo@example.com>',
        to: "bar@example.com",
        subject: "Hello",
        text: "Succesfully Resgister with us.",
        html: "<b>Succesfully Resgister with us</b>",
    };

    transporter.sendMail(message)
        .then((info) => {
            return res.status(201).json({
                msg: "you should receive an email",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });

};


/** REAL GMAIL SENDER */
const getbill = (req, res) => {

    const { userEmail } = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Mailgen',
            link: 'https://mailgen.js/'
        }
    });

    let response = {
        body: {
            name: "Bunga Aprillia",
            intro: "Your bill has arrived",
            table: {
                data: [
                    {
                        item: "Nodemailer Stack Book",
                        description: "A Backend application",
                        price: "$10.99"
                    }
                ]
            },
            outro: 'Looking forward to do more business'
        }
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: EMAIL,
        to: userEmail,
        subject: "Place Order",
        html: mail
    };

    transporter.sendMail(message)
        .then(() => {
            return res.status(201).json({
                msg: "you should receive an email"
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });

};

module.exports = {
    signup,
    getbill
};
