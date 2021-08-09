const express = require('express');
const Duolingo = require('../../services/DuolingoService');

// todo set login methods here later
const DuolingoService = new Duolingo({
    username: process.env.ROOT_USER,
    password: process.env.ROOT_PASSWORD,
    environment: 'node'
});

const router = express.Router();

// Get User Login Data
router.get('/account-details', async (req, res) => {
    const userData = await DuolingoService.getUserData();
    return userData;
});
// Post User Login
// /api/login
router.post('/login', async (req, res) => {
    const userLogin = await DuolingoService.logIn();
    return userLogin;
});

module.exports = router;
