const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();


router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try{
        await user.save();
        //Generate token for user upon creating account
        const token = await user.generateAuthToken();

        res.status(201).send({ user, token });
    } catch (e){
        res.status(400).send(e);
    }

})

router.post('/users/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        const user = await User.findByCredentials(email, password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = [];
        await req.user.save();

        res.send()
    } catch (e){
        res.status(500).save();
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})

router.patch('/users/me', auth, async (req, res) => {
    //To ensure valid updates
    const updates = Object.keys(req.body);
    console.log(updates);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    //Checks for valid updates.
    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Updates'});
    }

    try{
        updates.forEach((update) => req.user[update] = req.body[update] );
        await req.user.save();
        res.send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/users/me', auth, async (req, res) => {
    const _id = req.user._id;

    try{
        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;