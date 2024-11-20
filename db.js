const mongoose = require('mongoose');
//mongoosURL = 'mongodb://127.0.0.1:27017';
require('dotenv').config();

const port = process.env.PORT || 8080;
//console.log('Port :', port);
mongoosURL = 'mongodb+srv://deepikasahu:deepikas2212@job.if9dp.mongodb.net/'; //process.env.MONGODB_URL;  //hosted DB on mongoDB atlas to access publically 24x7.
console.log('MONGO_URI:', mongoosURL);
mongoose.connect(mongoosURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (!mongoosURL) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1); // Exit if no URI is found
  }

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('DB Connected!');
})

db.on('disconnected', ()=>{
    console.log('DB disconnected!');
})

db.on('error', (err)=>{
    console.log('Internal server error!', err);
})

module.exports = db;