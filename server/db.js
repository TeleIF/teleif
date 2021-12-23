//db.js
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }),
    (error, connection) => {
        if (error) return console.log(error);
        global.connection = connection.db('teleif');
        console.log('connected!');
    };

module.exports = {};
