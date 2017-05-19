import Ember from 'ember';

export default Ember.Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),
  firebase: Ember.inject.service('firebaseApp'),
  currentUser: null,
  login(email, password) {
    let auth = this.get('firebase').auth();
    return auth.signInWithEmailAndPassword(email, password).then((firebaseUser) => {
      let email = firebaseUser.email;
      return this.get('store').query('user', {
        orderBy: 'email',
        equalTo: email
      }).then((users) => {
        let user = users.objectAt(0);
        this.set('currentUser', user);
        this.get('cookies').write('currentUserId', user.get('id'));
      })
    })

  },
  logout() {
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');
    this.get('store').unloadAll();
    Ember.getOwner(this).lookup('router:main').transitionTo('application');

  },
  init() {
    this._super(...arguments);
    let currentUserId = this.get('cookies').read('currentUserId');
    if (currentUserId) {
      let currentUser = this.get('store').findRecord('user', currentUserId);
      this.set('currentUser', currentUser);
    }
  }
});
