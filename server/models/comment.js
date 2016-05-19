var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content: String,
	created_at: {type: Date, default: new Date},
	_post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
})

var Comment = mongoose.model("Comment", CommentSchema);