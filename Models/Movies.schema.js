const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    quality: [
        { type: String, required: true },
    ],
    thumbnail: { type: String, required: true },
    match: { type: Number, required: true },
    certificate: { type: String, required: true },
    duration: { type: String, required: true },
})

module.exports = mongoose.model("movies", moviesSchema)