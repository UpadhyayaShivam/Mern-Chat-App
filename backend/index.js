
// imports dependencies
const express = require('express');
const dotenv =  require('dotenv');
const router = require('./routes/chatRoutes');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5050;

// middlewares
app.use(express.json());

// routes
app.use('/api',router);


app.listen(PORT, ()=>{

    console.log(`server is running on ${PORT}`);
});