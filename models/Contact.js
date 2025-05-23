const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  msg: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema, 'Data');

module.exports = Contact;
