import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    taskString: null,
    actions: {
        addTask(param) {
            let newTask = {
                action: param,
                done: false,
                list: this.get('model').id,
            }
            let task = this.store.createRecord('task', newTask);

            task.validate().then(({ model, validations }) => {

                if (validations.get('isValid')) {
                    this.get('model').get('tasks').addObject(task);
                    model.save().then(() => {
                        this.set('value', null);
                        this.get('model').save();
                    });
                } else {
                    this.get('flashMessages').danger("The task must contains min 4 characters");

                }
            });
        }
    }
});