const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'AMToolsexindia@gmail.com',
    pass: 'defaultPassword',
  },
});

const mailOptions = {
  from: 'AMToolsexindia@gmail.com',
  to: 'arun03178@gmail.com',
  subject: '',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
