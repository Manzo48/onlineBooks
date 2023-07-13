const { Router } = require('express');
const { contactsController } = require('../controllers/reviews.controller.js');


const router = Router();


router.post('/review', contactsController.addReview);
router.patch('/review:id', contactsController.pathReview);
router.delete('/review:id', contactsController.deleteReview);
router.get('/reviews:id', contactsController.getAllReviewByBook)


module.exports = router;