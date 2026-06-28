require('dotenv').config();

// Import nodemailer correctly
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('\n📧 Testing Email Configuration...');
  console.log('Email User:', process.env.EMAIL_USER);
  console.log('Email Pass length:', process.env.EMAIL_PASS?.length || 0);
  console.log('Recipient:', process.env.RECIPIENT_EMAIL);

  // Check if email is set
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') {
    console.log('\n⚠️ Please update EMAIL_USER in .env with your real email!');
    return;
  }

  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS.length !== 16) {
    console.log('\n⚠️ EMAIL_PASS should be 16 characters (App Password)');
    console.log('Current length:', process.env.EMAIL_PASS?.length || 0);
    console.log('Generate: https://myaccount.google.com/apppasswords');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('\n📧 Sending test email...');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: '✅ Test Email from Portfolio',
      html: `
        <h2>✅ Email Configuration Successful!</h2>
        <p>Your portfolio email is working properly.</p>
        <p>Time: ${new Date().toLocaleString()}</p>
        <hr>
        <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
        <p><strong>To:</strong> ${process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('\n✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📧 Check your email inbox!');
    
  } catch (error) {
    console.error('\n❌ Email failed!');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    
    if (error.message.includes('535')) {
      console.log('\n🔑 Solution: Invalid App Password');
      console.log('1. Remove spaces from EMAIL_PASS in .env');
      console.log('2. Or generate new: https://myaccount.google.com/apppasswords');
      console.log('3. Select app: Mail, device: Other');
      console.log('4. Copy 16-digit password WITHOUT spaces');
    } else if (error.message.includes('Invalid login')) {
      console.log('\n🔑 Solution: Login failed');
      console.log('1. Check EMAIL_USER is correct');
      console.log('2. Check EMAIL_PASS is 16 characters');
      console.log('3. Enable 2-Step Verification on Gmail');
    } else if (error.message.includes('ECONNREFUSED')) {
      console.log('\n🌐 Solution: Network issue');
      console.log('1. Check your internet connection');
      console.log('2. Try VPN or different network');
    }
  }
}

// Run the test
testEmail();