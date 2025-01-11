const express = require('express');
const {User} = require('../models/user.js');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = require('../config/config.js');

const signupSchema = zon.object({
    username: zod.string().nonempty(),
    firstName: zod.string().nonempty(),
    lastName: zod.string().nonempty(),
    email: zod.string().email(),
    password: zod.string().min(8),
});


router.get('/user', async(req, res) => {
    try {
        const body = req.body;
        const {sucess} = signupSchema.parse(req.body);
        if(!sucess){
            return res.status(400).send('Invalid data');
        }  
        const user = User.findOne({
            username: body.username,
        })
        if(user._id){
            return res.status(400).send('User already exists');
        }
        const dbUser = await User.create(body);
        const token = await jwt.sign({
            userId : dbUser._id,

        },JWT_SECRET)
        res.json({
            message : "User successfully created",
            token : token,
        })
    } catch (error) {
        
    }

});
router.post('/signup', (req, res) => {
    res.send('Signup route');
});
router.post('/login', (req, res) => {
    res.send('Login route');
});


modeule.exports = router;