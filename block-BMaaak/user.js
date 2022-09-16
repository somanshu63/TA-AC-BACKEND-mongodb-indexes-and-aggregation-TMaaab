var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, unique: true},
    username: {type: String, unique: true},
    email: String,
    address: {
        city: String,
        state: { type: String, unique: true},
        country: String,
        pin: Number
    }
});

userSchema.createIndex({'address.country': 1}, {'address.state': 1});


module.exports = mongoose.model('User', userSchema);