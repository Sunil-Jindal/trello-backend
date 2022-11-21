const mongoose = require('mongoose');

// write user schema for telecaller and admin
const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [20, 'Name must be at most 20 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [3, 'Email must be at least 3 characters long'],
        maxlength: [20, 'Email must be at most 20 characters long'],
        unique: true
    },
    contact:{
        type: Number,
        required: [true, 'Phone is required'],
        minlength: [10, 'Phone must be at least 3 characters long'],
        maxlength: [13, 'Phone must be at most 20 characters long']
    },
    whatsapp:{
        type: Number,
        required: [false, 'Whatsapp is required'],
        minlength: [10, 'Whatsapp must be at least 3 characters long'],
        maxlength: [13, 'Whatsapp must be at most 20 characters long']
    },
    address:{
        type: String,
        required: [false, 'Address is required'],
        minlength: [5, 'Address must be at least 3 characters long']
    },
    skype:{
        type: String,
        required: [false, 'Skype is required'],
        minlength: [5, 'Skype must be at least 3 characters long']
    },
    website:{
        type: String,
        required: [false, 'Website is required'],
        minlength: [5, 'Website must be at least 3 characters long']
    },
    companyname:{
        type: String,
        required: [false, 'Company name is required'],
        minlength: [5, 'Company name must be at least 3 characters long']
    },
    business:{
        type: String,
        required: [false, 'Business is required'],
        minlength: [5, 'Business must be at least 3 characters long']
    },
    city:{
        type: String,
        required: [false, 'City is required'],
        minlength: [3, 'City must be at least 3 characters long']
    },
    reg_comments:{
        type: String,
        required: [false, 'Comments is required'],
        minlength: [3, 'Comments must be at least 3 characters long']
    },
    perspective:{
        type: String,
        required: [false, 'Perspective is required'],
        minlength: [5, 'Perspective must be at least 3 characters long']
    },
    comment_by:{
        type: String,
        required: [false, 'Commented By is required'],
        minlength: [3, 'Commented By must be at least 3 characters long']
    },
    assignee:{
        type: String,
        required: [false, 'Assignee is required'],
        minlength: [3, 'Assignee must be at least 3 characters long']
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    reg_date: {
        type: Date,
        default: Date.now
    },
    comment_date: {
        type: Date,
        default: Date.now
    },
    exdate: {
        type: Date,
        default: Date.now
    }
});

const Register = mongoose.model('REGISTER', registrationSchema);

module.exports = Register;