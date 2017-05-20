import Ember from 'ember';

export default Ember.Component.extend({
    session:Ember.inject.service(),
    actions:{
        toggleTaskStatus(param){
            param.set('done',!param.get('done'));
            param.save();
        },
        deleteTask(param){
            param.destroyRecord()
        }
    }
});
