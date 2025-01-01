# Portfolio MERN Backend

This repository contains the backend code for the contact section of my portfolio project. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and handles the submission of contact forms, storing the data in a MongoDB database and sending an email notification using Nodemailer.

## Features

- **Contact Form Submission**: Handles the submission of contact forms from the frontend.
- **Data Storage**: Saves contact form data to a MongoDB database.
- **Email Notification**: Sends an email notification to a specified email address upon form submission.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing contact form data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemailer**: Module for sending emails from Node.js applications.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Setup and Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/mishra-naveen-dev/portfolio-mern-backend.git
   cd portfolio-mern-backend
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a [.env](http://_vscodecontentref_/1) file in the root of the project and add the following environment variables:

   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=yourpassword
   EMAIL_RECEIVER=receiver.email@gmail.com
   DB=mongodb+srv://username:password@cluster.mongodb.net/portfolioDB?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Start the Server**:
   ```sh
   npm start
   ```

## Usage

- **Contact Form Endpoint**: The contact form data is submitted to the `/api/contact` endpoint.
- **Data Storage**: The submitted data is saved to the MongoDB database.
- **Email Notification**: An email notification is sent to the specified receiver email address upon successful form submission.

## Project Structure
