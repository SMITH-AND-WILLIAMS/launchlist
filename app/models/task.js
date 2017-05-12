import DS from 'ember-data';

export default DS.Model.extend({
    action:DS.attr('string'),
    done:DS.attr('boolean'),
    created:DS.attr('number'),
    modified:DS.attr('number'),
    due:DS.attr('number'),   
    list:DS.belongsTo('list',{async : true}),
});
