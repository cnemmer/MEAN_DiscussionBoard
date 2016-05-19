var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = {

	index: function(req, res){
		Post.find({}).populate('comments').populate('_topic').populate('_user').exec(function(err, doc){
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
				Topic.findById(req.body._topic, function(err, topic){
					if(err){
						console.log(err);
					}
					else{
						var post = new Post(req.body);
						post.save(function(err, post){
							if(err){
								console.log(err);
							}
							else{
								user.posts.push(post);
								user.save(function(err, user){
									if(err){
										console.log(err);
									}
									else{
										topic.posts.push(post);
										topic.save(function(err, topic){
											if(err){
												console.log(err);
											}
											else{
												res.json(post);
											}
										})
									}
								})
							}
						})
					}
				})
			}
		})
	}
}
