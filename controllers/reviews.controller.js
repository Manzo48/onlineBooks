const Review = require('../models/Review.model.js');

module.exports.contactsController = {
    addReview: (req, res) => {
        Review.create({
            text: req.body.text,
            nameAuthor: req.body.nameAuthor,
            book: req.body._bookId
        })
    },
    deleteReview: (req, res) => {
        Review.findByIdAndRemove(req.params.id).then(() => res.json('Рецензия удалена')).catch((err) => res.json(err))
    },
    getAllReviewByBook : (req, res) => {
        Review.find({_bookId: bookId}).then((data) => res.json(data))
    },
    pathReview: (req, res) => {
        Review.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            nameAuthor: req.body.nameAuthor,
            book: req.body._bookId
        })
    }
}