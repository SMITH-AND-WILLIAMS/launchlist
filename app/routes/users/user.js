import Ember from 'ember';

export default Ember.Route.extend({
    model(param){
        console.log(this.store.findRecord('user',param.user_id))
        
        return Ember.RSVP.hash({
            user: this.store.findRecord('user',param.user_id),
            lists: this.store.findRecord('list',param.user_id)
          });
    }
});
