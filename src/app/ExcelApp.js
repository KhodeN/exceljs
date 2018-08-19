import {Store} from './Store';

const COLUMN_COUNT = 100;
const ROW_COUNT = 1000;

export class ExcelApp {
    constructor(el) {
        this.$el = el;
        this._store = null;
    }

    run() {
        this._store = new Store(COLUMN_COUNT, ROW_COUNT);
        this.$el.innerHTML = `<p>Привет!</p>`;
    }
}