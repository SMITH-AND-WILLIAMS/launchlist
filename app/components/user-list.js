import Ember from 'ember';

export default Ember.Component.extend({
    list: 'null',
    tasks: Ember.computed(function() {
        return this.get('list').get('tasks')
    }),
    tasksNotDone: Ember.computed.filterBy('tasks', 'done', false),
    actions: {
        deleteList(list) {
            list.destroyRecord();
        }
    }
})