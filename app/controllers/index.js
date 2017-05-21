import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    email: null,
    password: null,
    actions: {
        login() {

            this.get('session').login(this.get('email'), this.get('password'))
                .then(() => {
                    this.get('flashMessages').success('You have successfully signed in')
                    this.transitionToRoute('users.user', this.get('session').get('currentUser').get('id'));
                })
                .catch((errors) => {
                    if (Ember.isArray(errors)) {
                        errors.forEach((error) => {
                            let message = `Error on ${error.attribute}: ${error.message}`;
                            this.get('flashMessages').danger(message, { sticky: true });
                        })
                    } else {
                        this.get('flashMessages').danger(errors.message, { sticky: true });
                    }
                })
        },
    },
});