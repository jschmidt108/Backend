const mongoose = require ('mongoose')

const artworkSchema = mongoose.Schema({
    objectID: Number,
    primaryImage: String, 
    primaryImageSmall: String,
    additionalImages: [
        String
    ],
    constituents: {
        constituentID: Number,
        role: String, 
        name: String,
        constituentULAN_URL: String,
        constituentWikidata_URL: String,
        gender: String
    },
    department: String,
    title: String,
    culture: String,
    period: String, 
    dynasty: String,
    reign: String,
    portfolio: String,
    artistRole: String,
    artistPrefix: String,
    artistDisplayName: String,
    artistDisplayBio: String,
    artistAlphaSort: String,
    artistNationality: String,
    artistBeginDate: String,
    artistEndDate: String,
    artistGender: String,
    artistWikidata_URL: String,
    objectDate: String,
    medium: String,
    creditLine: String,
    country: String,
    classification: String, 
    repository: String,
    GalleryNumber: String
})

const Artworks = mongoose.model('Artwork', artworkSchema);
module.exports = Artworks;