const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    image: String,
    titre: String,
    annee: Number,
    ratings: Number,
    genres: [String]
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film; 

