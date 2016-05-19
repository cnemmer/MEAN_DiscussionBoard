var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  content: String,
	created_at: {type: Date, default: new Date},
	_topics: {type: mongoose.Schema.Types.ObjectId, ref: "Topic"},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
})

var Post = mongoose.model("Post", PostSchema);