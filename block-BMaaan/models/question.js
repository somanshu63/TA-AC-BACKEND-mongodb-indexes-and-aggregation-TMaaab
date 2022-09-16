var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    title: {type: String, unique: true},
    tags: [String],
    views: Number,
    answer: {type: Schema.types.ObjectId, ref: 'Answer'},
    user: {type: Schema.types.ObjectId, ref: 'User'},
    replies: [{type: Schema.types.ObjectId, ref: 'Reply'}],
    upVotes: Number,
    downVotes: Number
}, {Timestamp: true});

questionSchema.createIndex({tags});

module.exports = mongoose.model('Question', questionSchema);

