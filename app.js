const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(cors())

dotenv.config({ path: './config.env' });
const User = require('./model/userSchema');
app.use(express.json());    
const PORT = process.env.PORT || 3000;

app.use(require('./router/auth'));

require('./db/conn');

const middleware = (req, res, next) => {
    next();
}

app.listen(PORT, () => {
    console.log('Server is ok');
});