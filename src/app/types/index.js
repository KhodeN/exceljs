import {NumberValue} from './NumberValue';
import {FormulaValue} from './FormulaValue';
import {StringValue} from './StringValue';
import {incorrectCellFormatError} from '../common/errors';

export const cellTypes = new Set([NumberValue, FormulaValue, StringValue]);

export function parseValueType(rawValue) {
    if (!rawValue) {
        return null;
    }

    for (const typeClass of cellTypes) {
        if (typeClass.canSet(rawValue)) {
            return typeClass;
        }
    }

    throw incorrectCellFormatError;
}