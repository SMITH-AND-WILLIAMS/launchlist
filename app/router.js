import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('users',function(){
    this.route('user', {path : ':user_id'}, function() {
      this.route('lists', function() {});
      this.route('list', {path : '/lists/:list_id'}, function() {});
      this.route('tasks', {path : '/lists/:list_id/tasks'}, function() {});
    });
  });

  this.route('user', function() {});
});

export default Router;
