const Poll = require('../models/Poll');

// Create a Poll
exports.createPoll = async (req, res) => {
    const { title, options } = req.body;
    const newPoll = new Poll({ title, options, creatorId: req.user.id });
    await newPoll.save();
    res.status(201).json(newPoll);
};

// Get All Polls
exports.getPolls = async (req, res) => {
    const polls = await Poll.find().populate('creatorId', 'username');
    res.json(polls);
};

// Get Poll by ID
exports.getPollById = async (req, res) => {
    const poll = await Poll.findById(req.params.id).populate('creatorId', 'username');
    if (!poll) return res.sendStatus(404);
    res.json(poll);
};

// Vote on Poll
exports.voteOnPoll = async (req, res) => {
    const { selectedOption } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.sendStatus(404);
    if (poll.votes.some(vote => vote.userId.toString() === req.user.id)) return res.sendStatus(403);

    poll.votes.push({ userId: req.user.id, selectedOption });
    await poll.save();
    res.json(poll);
};
exports.createPoll = async (req, res) => {
    console.log("Request Body:", req.body); // Log the request body
    console.log("User ID:", req.user.id); // Log the authenticated user's ID

    const { title, options } = req.body;
    const newPoll = new Poll({ title, options, creatorId: req.user.id });
    
    try {
        await newPoll.save();
        res.status(201).json(newPoll);
    } catch (error) {
        console.error("Error creating poll:", error);
        res.status(500).json({ message: 'Failed to create poll.' });
    }
};
