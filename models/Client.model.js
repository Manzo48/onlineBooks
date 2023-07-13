const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
    name: String,
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Books'
    }],
    reviews: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Books'
    }],
    isBlocked: Boolean
})

const Client = mongoose.model('Client', clientSchema);
module.exports = Client