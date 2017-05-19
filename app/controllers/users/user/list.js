import Ember from 'ember';

export default Ember.Controller.extend({
    session:Ember.inject.service(),
    actions:{
        toggleTaskStatus(param){
            param.set('done',!param.get('done'));
            param.save();
        },
        addTask(param){
            let newTask = {
                    action:param,
                    done:false,
                    list:this.get('model').id,
            }
            let task = this.store.createRecord('task',newTask);
            this.get('model').get('tasks').addObject(task);
            task.save().then(()=>{
                this.get('model').save();
            });
           
            
        }
    }
});
