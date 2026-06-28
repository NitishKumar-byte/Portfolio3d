const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmailNotification = async (name, email, message) => {
  try {
    console.log('📧 Preparing to send email...');
    console.log('📝 From:', process.env.EMAIL_USER);
    console.log('📝 To:', process.env.RECIPIENT_EMAIL);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `📨 New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #a78bfa); padding: 20px; color: white; text-align: center;">
            <h2>📨 New Contact Form Submission</h2>
            <p>Someone contacted you through your portfolio!</p>
          </div>
          <div style="padding: 20px; background: white;">
            <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <strong>👤 Name:</strong>
              <p style="margin: 5px 0 0 0;">${name}</p>
            </div>
            <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <strong>📧 Email:</strong>
              <p style="margin: 5px 0 0 0;">${email}</p>
            </div>
            <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <strong>💬 Message:</strong>
              <p style="margin: 5px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <strong>📅 Date & Time:</strong>
              <p style="margin: 5px 0 0 0;">${new Date().toLocaleString()}</p>
            </div>
          </div>
          <div style="padding: 15px; text-align: center; color: #718096; font-size: 12px; background: #f8f9fa;">
            <p>From: <strong>${email}</strong></p>
            <p>To: <strong>${process.env.RECIPIENT_EMAIL}</strong></p>
            <p>Reply directly to <strong>${email}</strong></p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Date: ${new Date().toLocaleString()}
        
        From: ${email}
        To: ${process.env.RECIPIENT_EMAIL}
        
        Reply to: ${email}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    return info;

  } catch (error) {
    console.error('❌ Email error:', error.message);
    throw error;
  }
};

module.exports = { sendEmailNotification };