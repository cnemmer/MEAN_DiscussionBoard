
var User = require('./../controllers/users');
var Topic = require('./../controllers/topics');
var Post = require('./../controllers/posts');
var Comment = require('./../controllers/comments');

module.exports = function(app){

	app.get('/users', User.index);

	app.post('/users', User.create);

	app.get('/topics', Topic.index);

	app.post('/topics', Topic.create);

	app.get('/posts', Post.index);

	app.post('/posts', Post.create);

	app.get('/comments', Comment.index);

	app.post('/comments', Comment.create);

}

// _user: 573de7066ba68e1549d71349
// _topic: 573de747698de517497c6418
// _post: 573de774698de517497c6419