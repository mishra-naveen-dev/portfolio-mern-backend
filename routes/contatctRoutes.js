const express = require("express");
const Contact = require("../models/Contact");
const { sendEmail } = require("../utils/emailService"); // Import sendEmail function
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
    console.log("Contact saved successfully");

    // Send the email
    await sendEmail({ name, email, mobile, msg });
    console.log("Email sent successfully");

    res.status(201).json({
      message: "Contact form submitted successfully and email sent!",
    });
  } catch (error) {
    console.error("Error saving contact or sending email:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
