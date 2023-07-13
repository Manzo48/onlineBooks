const Book = require('../models/Book.model.js')

module.exports.contactsController = {
    addBooks: (req, res) => {
        Book.create({
             name: req.body.name,
             author: req.body.author,
             genre: req.body.genre, 
             reviews:  req.body.reviews,
             clientHistory: req.body.clientHistory,
             isBlocked: false
        }).then(() => res.json("добавлена Книга")).catch((err) => res.json(err))
    },
    deleteBooks: (req, res) => {
        Book.findByIdAndRemove(req.params.id).then(() => res.json('Книга удалена')).catch((err) => res.json(err))
    },
    patchBooks: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
             name: req.body.name,
             author: req.body.author,
             genre: req.body.genre,
             reviews:  req.body.reviews,
             clientHistory: req.body.clientHistory,
             isBlocked: req.body.isBlocked
        })
        .then(() => res.json('Книга изменена')).catch((err) => res.json(err))
    },
    getAllBooks : (req, res) => {
        Book.find({}).then((data) => res.json(data))
    },
    getBook : (req, res) => {
        Book.findbyId(req.params.id).then((data) => res.json(data))
    },
    getBookbyGenre: (req,res) => {
        Book.find({genre: req.params.genreId}).then((data) => res.json(data))
    },


}