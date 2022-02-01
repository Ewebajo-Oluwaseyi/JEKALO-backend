const mongoose = require('mongoose');
//const config = require('config');
const db = "mongodb+srv://adeoluwa:adeoluwa@user.he5sy.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });

         console.log('MongoDB connected')
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }

};

module.exports = connectDB;