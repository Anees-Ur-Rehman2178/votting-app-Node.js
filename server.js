const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const d_b = require('./db');
require('dotenv').config();
//const passport = require('./auth')

const { jwtAuthMiddleware} = require("./jwt");

// importing person route file first before use
const userRoute = require('./routes/r-user');
const candidateRoute = require('./routes/r-candidate')

// routes
app.use('/user', userRoute)
app.use('/candidate', candidateRoute)

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})