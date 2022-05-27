/////////////////////////////////////////////////////////////////////////
// set up
/////////////////////////////////////////////////////////////////////////

const express = require('express');
const mongoose = require ('mongoose');
// const cors = require('cors');
const app = express ();
require('dotenv').config()

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , () => {
    console.log('connected to mongo')
});

// Error / success
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

app.use(express.json());
// app.use(cors());

/////////////////////////////////////////////////////////////////////////
// routes
/////////////////////////////////////////////////////////////////////////

app.get('/', (req, res)=> {
  res.send('Hello world')
})

/////////////////////////////////////////////////////////////////////////
// connection
/////////////////////////////////////////////////////////////////////////

// app.listen (3000, () => {
//     console.log('listening...');

// })

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

