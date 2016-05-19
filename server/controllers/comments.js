var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {

	index: function(req,res){
		Comment.find({}).exec(function(err, doc){
			if(err){
				console.log(err);
			}
			else{
				res.json(doc);
			}
		})
	},
	create: function(req,res){
		User.findById(req.body._user, function(err, user){
			if(err){
				console.log(err);
			}
			else{
				Post.findById(req.body._post, function(err, post){
					if(err){
						console.log(err);
					}
					else{
						var comment = new Comment(req.body);
						comment.save(function(err, comment){
							if(err){
								console.log(err);
							}
							else{
								user.comments.push(comment);
								user.save(function(err, user){
									if(err){
										console.log(err);
									}
									else{
										post.comments.push(comment);
										post.save(function(err, post){
											if(err){
												console.log(err);
											}
											else{
												res.json(comment);
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