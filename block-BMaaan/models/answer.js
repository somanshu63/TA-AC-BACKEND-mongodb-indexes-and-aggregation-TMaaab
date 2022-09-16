var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    title: {type: String, unique: true},
    question: {type: Schema.types.ObjectId, ref: 'Question'},
    user: {type: Schema.types.ObjectId, ref: 'User'},
    replies: [{type: Schema.types.ObjectId, ref: 'Reply'}],
    upVotes: Number,
    downVotes: Number
}, {Timestamp: true});

module.exports = mongoose.model('Answer', answerSchema);

