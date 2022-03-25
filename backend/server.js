const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongo DB connection
const uri = "mongodb+srv://admin:admin@cluster0.oud6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo db connection established .");
});

// For Routes
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log(`Server is running on port : ${port} :) `);
})