import Ember from 'ember';

export default Ember.Controller.extend({
    listString: null,
    actions: {
        addList(param) {
            let user = this.get('model');
            let newList = {
                name: param,
                user: user.id,
                tasks: []
            }
            let list = this.store.createRecord('list', newList);
            list.validate().then(({ model, validations }) => {

                if (validations.get('isValid')) {
                    user.get('lists').addObject(list);
                    model.save().then(() =>{
                        this.set('value', null);
                        this.get('model').save();
                    });
                } else {
                    this.get('flashMessages').danger("The List must contains min 4 characters");

                }
            });
        }
    }
});