const zod = require('zod');

const signUpDataValidation = (req) => {
    const { firstName, lastName, email, password } = req.body;
    if(!firstName || !lastName){
        throw new Error('First name and last name are required');
    }
    else if(!zod.string().email().check(email)){
        throw new Error('Email is invalid');
    }
    else if(!zod.string().strongPassword().check(password)){
        throw new Error('Password is weak');
    }
}

module.exports = signUpDataValidation;