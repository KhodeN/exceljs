import {notImplementedError} from '../common/errors';

export class BaseValue {
    constructor(value) {
        this.value = value;
    }

    // noinspection JSUnusedLocalSymbols
    static canSet(value) {
        throw notImplementedError;
    }

    toString() {
        return this.value;
    }
}