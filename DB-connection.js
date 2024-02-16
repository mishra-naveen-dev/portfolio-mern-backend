// server/db-connection.js
const mongoose = require('mongoose');
require("dotenv").config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// mongoose.connect("mongodb://localhost:27017/ProtfolioData",{ useNewUrlParser: true,
//  useUnifiedTopology: true,}.then(()=>console.log("connection successfull..."))
//  .catch((err)=>console.log(err));

