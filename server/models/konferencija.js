const mongoose = require('mongoose');
const Tim = require('./tim');

const Schema = mongoose.Schema;

const konferencijaSema = new Schema({
    naziv: String,
    liga: {type: Schema.Types.ObjectId, ref:'Liga'},
    timovi: [Tim.schema]
});

const Konferencija = mongoose.model('Konferencija', konferencijaSema);
module.exports = Konferencija;