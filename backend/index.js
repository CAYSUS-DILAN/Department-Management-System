require("dotenv").config();  // Load .env variables at the very top

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// MongoDB Connection with Improved Error Handling
const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
    console.error("❌ MongoDB URL is undefined. Please check your .env file.");
    process.exit(1); // Exit the app if MongoDB URI is missing
}

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
        console.error("❌ NOT CONNECTED TO NETWORK", err);
        process.exit(1); // Exit the app if MongoDB fails to connect
    });

// Routes
app.use('/', Routes);

// Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server started at port no. ${PORT}`);
});