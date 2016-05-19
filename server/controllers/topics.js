var mongoose = require('mongoose');
var User = mongoose.model('User');

var Topic = mongoose.model('Topic');

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

	}
}