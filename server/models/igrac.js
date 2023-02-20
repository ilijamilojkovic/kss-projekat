const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const igracSema = new Schema({
    _id: Schema.Types.ObjectId,
    ime: String,
    prezime: String,
    datumRodjenja: String,
    brDresa: String,
    urlSlike: String,
    tim: {type: Schema.Types.ObjectId, ref: 'Tim'}
});

const Igrac = mongoose.model('Igrac', igracSema);
module.exports = Igrac;