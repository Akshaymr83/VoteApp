const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    pollId: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    selectedOption: String,
});

module.exports = mongoose.model('Vote', VoteSchema);
