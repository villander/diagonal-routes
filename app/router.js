import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DiagonalENV.locationType
});

Router.map(function() {
  this.resource('posts');
  this.resource('post', {path: '/posts/:post_id'}, function () {
    this.route('new');
    this.route('edit');
    this.resource('comments');
  });
  this.route('signup');
});

export default Router;