import {Cell} from './Cell';
import {numberToColumnCode} from './helpers';

export class Store {
    constructor(columnCount, rowCount) {
        this._cells = new Map();

        for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
            for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
                const key = `${numberToColumnCode(columnIndex)}${rowIndex + 1}`;
                this._cells.set(key, new Cell());
            }
        }
    }
}