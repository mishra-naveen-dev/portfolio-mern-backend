const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, mobile, msg }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Sender's email address
        pass: process.env.EMAIL_PASS, // Sender's email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_RECEIVER, // Receiver's email address
      subject: "New Contact Form Submission",
      text: `
        You have received a new message from your contact form:

        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${msg}

        -- This message was sent via your portfolio contact form.
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmail };
