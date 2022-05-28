const mongoose = require ('mongoose')

const pageSchema = mongoose.Schema({
    pagination : {
        total: Number,
        limit: Number,
        offset: Number,
        total_pages: Number,
        current_page: Number,
        next_url: String
    }
})

const Pages = mongoose.model('Page', pageSchema);
module.exports = Pages;