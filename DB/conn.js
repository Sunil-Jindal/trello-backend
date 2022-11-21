const DB = process.env.DATABASE;
const mongooose = require('mongoose');
mongooose.connect(DB).then(() => {
    console.log('Connected to database');
    }).catch(err => {
        console.log('Connection failed', err);
    });