import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        toggleTaskStatus(param){
            param.set('done',!param.get('done'));
            param.save();
        }
    }
});
