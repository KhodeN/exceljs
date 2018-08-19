import {parseValueType} from './types';


export class Store {
    constructor() {
        this._cells = new Map();
    }

    load(data) {
        this._cells = new Map();
        for (const [k, v] of Object.entries(data)) {
            this.setRawCellValue(k, v);
        }
    }

    setCellValue(code, value) {
        this._cells.set(code, value);
    }

    setRawCellValue(code, rawValue) {
        const valueType = parseValueType(rawValue);
        if (valueType) {
            this.setCellValue(code, new valueType(rawValue));
        }
    }
}