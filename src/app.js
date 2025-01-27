const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryanasermely@gmail.com',
    pass: 'Quincy02169',
  },
});

app.post('/send-email', (req, res) =>  {
  console.log('Request received at /send-email:', req.body);
  const { subject, body } = req.body;

  console.log('body made');

  const mailOptions = {
    from: 'ryanasermely@gmail.com',
    to: 'raserm1@lsu.edu',
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});