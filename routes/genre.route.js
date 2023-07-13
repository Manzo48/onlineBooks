const { Router } = require('express');
const { contactsController } = require('../controllers/genre.controller.js');


const router = Router();


router.post('/admin/genre', contactsController.addGenre);
router.patch('/admin/genre:id', contactsController.patchGenre);
router.delete('/admin/genre:id', contactsController.deleteGenre);
router.get('/genres', contactsController.getAllGenre)


module.exports = router;