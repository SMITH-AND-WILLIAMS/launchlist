import { buildValidations, validator } from 'ember-cp-validations';

import DS from 'ember-data';

const { attr, hasMany } = DS;

const Validations = buildValidations({
    email:[
        validator('presence',true),
        validator('format',{type:'email'})
    ],
    password:[
        validator('presence',true),
        validator('length',{min:8})
    ]
});
export default DS.Model.extend(Validations,{
    name:attr('string'),
    email:attr('string'),
    lists:hasMany('list',{async : true}),
});
