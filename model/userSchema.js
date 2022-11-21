const mongoose = require('mongoose');

// write user schema for telecaller and admin
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [20, 'Name must be at most 20 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [5, 'Email must be at least 5 characters long'],
        maxlength: [25, 'Email must be at most 25 characters long'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [3, 'Password must be at least 3 characters long'],
        maxlength: [20, 'Password must be at most 20 characters long']
    },
    phone:{
        type: Number,
        required: [true, 'Phone is required'],
        minlength: [10, 'Phone must be at least 10 characters long'],
        maxlength: [13, 'Phone must be at most 13 characters long']
    },
    address:{
        type: String,
        required: [true, 'Address is required'],
        minlength: [5, 'Address must be at least 5 characters long']
    },
    otp:{
        type: Number,
        required: [true, 'OTP is required'],
        minlength: [6, 'OTP must be at least 4 characters long'],
        maxlength: [6, 'OTP must be at most 4 characters long']
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// email vaildation add

userSchema.path('email').validate(async (email) => {
    const emailCount = await mongoose.models.USER.countDocuments({email})
    return !emailCount
},'Email already exists')


const User = mongoose.model('USER', userSchema);

module.exports = User;