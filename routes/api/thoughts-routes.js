const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updatedThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updatedThought)
  .delete(deleteThought)

// /api/thoughts/<thoughtId>/reaction
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction)

module.exports = router;