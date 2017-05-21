import Ember from 'ember';

export function taskCount(params) {

    console.log(params.objectAt(0))
    return params;
}

export default Ember.Helper.helper(taskCount);