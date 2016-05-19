var mongoose = require('mongoose');
var User = mongoose.model('User');

var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
// PostSchema.plugin(deepPopulate, options /* more on options below */);

module.exports = {

	index: function(req, res){
		Topic.find({}).populate('posts').populate('_user').exec(function(err, doc){
			if(err){
				console.log(err);
			}
			else{
				res.json(doc);
			}
		})
	},
	create: function(req, res){
		User.findById(req.body._user, function(err, user){
			if(err){
				console.log(err);
			}
			else{
				var topic = new Topic(req.body);
				topic.save(function(err, topic){
					if(err){
						console.log(err);
					}
					else{
						user.topics.push(topic);
						user.save(function(err, doc){
							if(err){
								console.log(err);
							}
							else{
								res.json(topic);
							}
						})
					}
				})
			}
		})
	},
	show: function(req, res) {
		Topic.findById(req.params.id)
		.populate('_user posts').exec(function(err, topic) {

			if(err){
				console.log(err);
			} else {
				Topic.deepPopulate(topic, 'posts.comments posts._user', function (err, _posts) {
					res.json(_posts);
				});
			}
		});
	}
}


