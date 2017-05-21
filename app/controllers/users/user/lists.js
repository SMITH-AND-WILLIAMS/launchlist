import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    listString: null,
    actions: {
        addList(param) {
            let user = this.get('session').currentUser;
            let newList = {
                name: param,
                user: user.id,
                tasks: []
            }

            let list = this.store.createRecord('list', newList);
            list.validate().then(({ model, validations }) => {

                if (validations.get('isValid')) {
                    user.get('lists').addObject(list);
                    console.log(Ember.typeOf(user))
                    model.save().then(function() {});
                } else {
                    this.get('flashMessages').danger("The List must contains min 4 characters");

                }
            });
        }
    }
});