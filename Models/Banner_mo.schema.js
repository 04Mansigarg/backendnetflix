const mongoose = require("mongoose")

const bannerMoviesSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    quality: [{ type: String, required: true },],
    genres: [{ type: String, required: true },],
    description: [{ type: String, required: true },],
    cast: [{ type: String, required: true },],
    bannerPic: { type: String, required: true },
    namePic: { type: String, required: true },
    match: { type: Number, required: true },
    year: { type: Number, required: true },
    certificate: { type: String, required: true },
    duration: { type: Number, required: true },
})

module.exports = mongoose.model("bannerMovies", bannerMoviesSchema)