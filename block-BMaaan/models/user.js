var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, unique: true},
    email: String,
    username: String,
    photo: String,
    questions: [{type: Schema.types.ObjectId, ref: 'Question'}],
    answers: [{type: Schema.types.ObjectId, ref: 'Answer'}],
    replies: [{type: Schema.types.ObjectId, ref: 'Reply'}],
    upVotes: Number,
    downVotes: Number
}, {Timestamp: true});

module.exports = mongoose.model('User', userSchema);

