const mongoose = require('mongoose');
require('dotenv').config({ path: '.env'});

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_TEST, {
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('connected database');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connection;