// const jwt = require('jsonwebtoken');

// exports.authenticateJWT = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (token) {
//         jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//             if (err) return res.sendStatus(403);
//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };
// backend/middleware/auth.js
// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.sendStatus(403); // Forbidden if no token is provided
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user; // Attach the user to the request
        next(); // Proceed to the next middleware/controller
    });
};

module.exports = { authenticateJWT };
