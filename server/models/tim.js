const mongoose = require('mongoose');
const Igrac = require('./igrac');

const Schema = mongoose.Schema;

const timSema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    naziv: String,
    urlSlike: String,
    igraci: [Igrac.id],
    konferencija: {type: Schema.Types.ObjectId, ref: 'Tim'}
});

const Tim = mongoose.model('Tim', timSema);
module.exports = Tim;