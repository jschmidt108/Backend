/////////////////////////////////////////////////////////////////////////
// set up
/////////////////////////////////////////////////////////////////////////

const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const Artworks = require('./models/artworks.js');
// const seedData = require('./models/oldSeed.js')
// const Artworks = require('./models/oldSchema.js');
// const Pages = require('./models/oldPages.js');
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
app.use(cors());

/////////////////////////////////////////////////////////////////////////
// routes
/////////////////////////////////////////////////////////////////////////

//___________________
// Seed data => only run this once
//___________________

// app.get('/artworks/seed', (req, res) => {
//     Artworks.create(seedData, (err, createData) => {
//         console.log('seed data registered')
//     })
//     res.redirect('/artworks')
// })

//___________________
//Create / POST route
//___________________

app.post('/artworks', (req, res) => {
    Artworks.create(req.body, (err, createdArtwork) => {
        res.json(createdArtwork);
    })
})

//___________________
//Index / GET route
//___________________

app.get('/artworks', (req, res)=> {
    Artworks.find({}, (err, foundArtworks)=> {
        res.json(foundArtworks);
    })
})

//___________________
//Remove / DELETE route
//___________________

app.delete('/artworks/:id', (req, res) => {
    Artworks.findByIdAndRemove(req.params.id, (err, deletedArtwork) => {
        res.json(deletedArtwork);
    })
})

//___________________
//Update / PUT route
//___________________

app.put('/artworks/:id', (req, res)=>{
    Artworks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedArtwork)=>{
        res.json(updatedArtwork);
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

