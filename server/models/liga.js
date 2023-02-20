const mongoose = require('mongoose');
const Konferencija = require('./konferencija');

const Schema = mongoose.Schema;

const ligaSema = new Schema({
    naziv: String,
    urlSlike: String,
    konferencije: [Konferencija.schema]
});

const Liga = mongoose.model('Liga', ligaSema);
module.exports = Liga;