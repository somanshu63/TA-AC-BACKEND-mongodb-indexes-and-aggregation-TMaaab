var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String]
});

articleSchema.createIndex({tags: 1});

articleSchema.createIndex({title: "text"});

articleSchema.createIndex({title: 'text'}, {description: 'text'});

module.exports = mongoose.model('Article', articleSchema);