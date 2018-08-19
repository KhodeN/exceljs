import {BaseValue} from './BaseValue';

export class NumberValue extends BaseValue {
    constructor(value) {
        super(parseFloat(value));
    }

    static canSet(value) {
        return value ? /^\d/.test(value) : false;
    }

    toString() {
        return this.value.toFixed(2);
    }
}