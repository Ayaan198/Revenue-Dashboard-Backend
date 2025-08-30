const fs = require('fs');
const csv = require('csv-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

fs.createReadStream('./data/clients.csv')
  .pipe(csv())
  .on('data', (row) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: row.email,
      subject: `Your Weekly Revenue Report!`,
      html: `<p>Hi ${row.name},</p>
             <p>💲Your revenue this month is <strong>${row.revenue}</strong>.</p>
             <p>📦Total Orders: <strong>${row.orders}</strong></p>
             <p>✅Total Sales: <strong>${row.sales}</strong></p>
             <p>Thanks,<br/>Team Anphonic</p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.error(`❌ Error sending to ${row.email}:`, err);
      else console.log(`✅ Email sent to ${row.email}:`, info.response);
    });
  })
  .on('end', () => {
    console.log('📨 All emails processed.');
  });
