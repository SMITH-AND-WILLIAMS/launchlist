import Ember from 'ember';

export default Ember.Route.extend({
        model(params){
          this.store.query('task',{list: params.list_id}).then(function(tasks){
            console.log(tasks.get('length'))
            return tasks;
          });
    }
});
