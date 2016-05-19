var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  
  content: String,
  likes: {type: Number, default: 0},
  created_at: {type: Date, default: new Date},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: mongoose.Schema.Types.ObjectId, ref: "Topic"},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
})

var Post = mongoose.model("Post", PostSchema);