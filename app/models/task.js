import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({

    action: {
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
    action: DS.attr('string'),
    done: DS.attr('boolean'),
    created: DS.attr('number'),
    modified: DS.attr('number'),
    due: DS.attr('number'),
    list: DS.belongsTo('list', { async: true }),
});