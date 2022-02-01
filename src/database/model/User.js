const mongoose = require('mongoose');

/**mongoose model */
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    username:  {type: String, required: true},
    date_of_birth: {type: String, required: true},
    name_prefix: {type: String, required: true},
});


module.exports = mongoose.model('user', userSchema)