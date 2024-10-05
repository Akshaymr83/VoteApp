const express = require('express');
const router = express.Router();
const pollController = require('../controller/pollController');
const auth = require('../middleware/auth');

router.post('/', auth.authenticateJWT, pollController.createPoll);
router.get('/', pollController.getPolls);
router.get('/:id', pollController.getPollById);
router.post('/:id/vote', auth.authenticateJWT, pollController.voteOnPoll);

module.exports = router;
