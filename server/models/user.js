var mongoose = require('mongoose');
//title
//content
//_user
//created_at
//[posts]
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var UserSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: new Date},
	topics: [{type: mongoose.Schema.Types.ObjectId, ref: "Topic"}],
	posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
})

UserSchema.plugin(deepPopulate);
var User = mongoose.model("User", UserSchema);