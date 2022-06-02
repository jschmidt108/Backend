/////////////////////////////////////////////////////////////////////////
// set up
/////////////////////////////////////////////////////////////////////////

const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const Assets = require('./models/assets.js');
// const seedData = require('./models/oldSeed.js')
const app = express();
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
app.use(cors());

/////////////////////////////////////////////////////////////////////////
// routes
/////////////////////////////////////////////////////////////////////////

//___________________
// Seed data => only run this once
//___________________

// app.get('/assets/seed', (req, res) => {
//     Assets.create(seedData, (err, createData) => {
//         console.log('seed data registered')
//     })
//     res.redirect('/assets')
// })

//___________________
//Create / POST route
//___________________

app.post('/assets', (req, res) => {
    Assets.create(req.body, (err, createdAsset) => {
        res.json(createdAsset);
    })
})

//___________________
//Index / GET route
//___________________

app.get('/assets', (req, res)=> {
    Assets.find({}, (err, foundAssets)=> {
        res.json(foundAssets);
    })
})

//___________________
//Remove / DELETE route
//___________________

app.delete('/assets/:id', (req, res) => {
    Assets.findByIdAndRemove(req.params.id, (err, deletedAsset) => {
        res.json(deletedAsset);
    })
})

//___________________
//Update / PUT route
//___________________

app.put('/assets/:id', (req, res)=>{
    Assets.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAsset)=>{
        res.json(updatedAsset);
    })
})

//___________________
//Initial Test route
//___________________

// app.get('/', (req, res)=> {
//   res.send('Hello world')
// })

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

