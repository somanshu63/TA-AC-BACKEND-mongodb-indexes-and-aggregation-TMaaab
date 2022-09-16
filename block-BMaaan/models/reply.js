var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var replySchema = new Schema({
    title: String,
    question: {type: Schema.types.ObjectId, ref: 'Question'},
    answer: {type: Schema.types.ObjectId, ref: 'Answer'},
    user: {type: Schema.types.ObjectId, ref: 'User'},
    upVotes: Number,
    downVotes: Number
}, {Timestamp: true});

module.exports = mongoose.model('Reply', replySchema);

