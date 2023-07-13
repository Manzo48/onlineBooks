const { Router } = require('express');
const { contactsController } = require('../controllers/clients.controller.js');


const router = Router();


router.post('/client', contactsController.addClient);
router.patch('/clientbook/:id', contactsController.takeBook);
router.patch('/admin/booksrm/:id', contactsController.removeBook)



module.exports = router;