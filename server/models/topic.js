var mongoose = require('mongoose');
//title
//content
//_user
//created_at
//[posts]

var TopicSchema = new mongoose.Schema({
	title: String,
	content: String,
	category: String,
	created_at: {type: Date, default: new Date},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
	posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}]
})

var Topic = mongoose.model("Topic", TopicSchema);