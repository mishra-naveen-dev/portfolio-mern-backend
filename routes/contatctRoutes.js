const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/api/contact", async (req, res) => {
  const { name, email, mobile, msg } = req.body;

  if (!name || !email || !mobile || !msg) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newContact = new Contact({ name, email, mobile, msg });

  try {
    // Save the data to the database
    await newContact.save();

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

    res
      .status(201)
      .json({ message: "Contact form submitted successfully and email sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
