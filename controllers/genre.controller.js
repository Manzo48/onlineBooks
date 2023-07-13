const Genre = require('../models/Genre.model.js');

module.exports.contactsController = {
    addGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    patchGenre: (req, res) => {
        Genre.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then(() => res.json('Жанр удален')).catch((err) => res.json(err))
    },
    getAllGenre : (req, res) => {
        Genre.find({}).then((data) => res.json(data))
    },
}

