const mongoose = require('mongoose');
const zod = require('zod');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!zod.string().email().check(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!zod.string().strongPassword().check(value)) {
                throw new Error('Password is weak');
            }
        },
    }
}); 

module.exports = mongoose.model('User', userSchema);