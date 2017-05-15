import Ember from 'ember';

export default Ember.Controller.extend({
    email:'test@test.com',
    password:'testpassword',
    actions :{
        login(){
            console.log(this.get('email'), this.get('password'));
        }
    }
});
