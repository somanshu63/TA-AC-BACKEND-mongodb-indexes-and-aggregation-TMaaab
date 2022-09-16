var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stackSchema = new Schema({
    questions: [{type: Schema.types.ObjectId, ref: 'Question'}],
    answer: [{type: Schema.types.ObjectId, ref: 'Answer'}],
    user: [{type: Schema.types.ObjectId, ref: 'User'}],
    votes: [{type: Schema.types.ObjectId, ref: 'Vote'}],
    replies:  [{type: Schema.types.ObjectId, ref: 'Reply'}]
}, {Timestamp: true});

module.exports = mongoose.model('Stack', stackSchema);

