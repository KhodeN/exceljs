import {BaseValue} from './BaseValue';

export class StringValue extends BaseValue {
    constructor(value) {
        super(value.substring(1));
    }

    static canSet(value) {
        return value ? value[0] === '\'' : false;
    }

}