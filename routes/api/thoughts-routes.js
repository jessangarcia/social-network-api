const router = require('express').Router();
const {
  
} = require('../../controllers/thought-controller');

// /api/pizzas
router
  .route('/')
  .get()
  .post();

// /api/pizzas/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();


module.exports = router;