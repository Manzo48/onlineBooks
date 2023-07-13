const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'genre'
    },
    reviews: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'
    }],
    clientHistory: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'
    }],
    isBlocked: Boolean
    
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book