const mongoose = require ('mongoose')

const assetsSchema = mongoose.Schema({
    // primary info
    primary_Image: String, 
    title: String,
    description: String,
    createdDate: String,
    additionalImages: [
        String
    ],
    tags: [
        String
    ],

    // artist or owner info
    artist: String,
    owner: String,
    
    // collection info 
    collection_Title: String,
    collection_Image: String,

    // contract info
    data_URL: String,
    bid_count: Number,
    bid_price: Number, 

    // prior sales info 
    sales_count: Number, 
    sales_price: Number
})

const Assets = mongoose.model('Assets', assetsSchema);
module.exports = Assets;