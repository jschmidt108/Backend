const mongoose = require ('mongoose')

const artworkSchema = mongoose.Schema({
    data : {
        id: Number,
        title: String,
        thumbnail: {
            lqip: String,
            width: Number, 
            height: Number
        },
        date_display: String,
        artist_display: String,
        place_of_origin: String,
        medium_display: String,
        credit_line: String,
        latitude: Number,
        longitude: Number,
        latlon: String, 
        is_on_view: Boolean,
        on_loan_display: String,
        department_title: String,
        term_titles: [
            String
        ]
    }
})

const Artworks = mongoose.model('Artwork', artworkSchema);
module.exports = Artworks;