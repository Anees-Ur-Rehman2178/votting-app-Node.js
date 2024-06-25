const mongoose = require('mongoose');
require('dotenv').config();
 
const mongoURL = 'mongodb://localhost:27017/voting_app';
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const d_b = mongoose.connection

d_b.on('connected', ()=>{
     console.log('DB connected Successfully');
} )
d_b.on('error', ()=>{
    console.log('Error while connecting DB')
})
d_b.on('disconnected', ()=>{
    console.log('Mongo Disconnected')
})

module.exports = d_b