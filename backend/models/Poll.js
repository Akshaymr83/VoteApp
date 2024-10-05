const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    title: { type: String, required: true },
    options: [{ type: String, required: true }],
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    votes: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, selectedOption: String }],
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poll', PollSchema);
