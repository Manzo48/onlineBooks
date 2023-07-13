const { Router } = require('express');
const { contactsController } = require('../controllers/books.controller.js');

const router = Router();

router.get('/books', contactsController.getAllBooks);
router.get('/books/:id', contactsController.getBook)
router.get('/books/:genreId', contactsController.getBookbyGenre)
router.delete('/admin/books:id', contactsController.deleteBooks)
router.post('/admin/books', contactsController.addBooks)
router.patch('/admin/books:id', contactsController.patchBooks)




module.exports = router;