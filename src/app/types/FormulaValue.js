import {BaseValue} from './BaseValue';

export class FormulaValue extends BaseValue {
    constructor(value) {
        super(value);
    }

    static canSet(value) {
        return value ? value[0] === '=' : false;
    }
}