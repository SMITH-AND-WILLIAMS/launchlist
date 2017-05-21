import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({

    name: {
        'description': 'Action de la tache',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 4,
                max: 250
            })
        ]
    }
})
export default DS.Model.extend(Validations, {
    name: DS.attr('string'),
    user: DS.belongsTo('user', { async: true }),
    tasks: DS.hasMany('task', { async: true })
});