const mongoose = require('mongoose');
const crypto = require("crypto");
const { type } = require('os');

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        data: String,
        trim: true,
        required: true,
        max: 30
    },
    lastName: {
        data: String,
        trim: true,
        required: true,
        max: 30
    },
    email: {
        data: String,
        trim: true,
        required: true,
        max: 100,
        lowecase: true
    },
    password: {
        data: String,
        trim: true,
        required: true,
        max: 30
    },
    salt: String,

    role: {
        data: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }

}, { timestamps: true });

// Virtual
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encrypytPassword(password);

    })
    .get(function () {
        return this._password
    })

// methods 
userSchema.methods = {
    encryptPassword: function(password){
        if(!password) return ''

        try{
            
        }
    }
}