import {Store} from './Store';

const COLUMN_COUNT = 100;
const ROW_COUNT = 1000;

export class ExcelApp {
    constructor(el) {
        this.$el = el;
        this._store = null;
    }

    run(data) {
        this._store = new Store(COLUMN_COUNT, ROW_COUNT);


        if (data) {
            this._store.load(data);
        }

        this.$el.innerHTML = `<table class="excel-table">
    <thead>
    <tr>
        <th>*</th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>1</th>
        <td><input type="text" value="123"></td>
        <td><input type="text" value="123"></td>
        <td><input type="text" value="123"></td>
        <td><input type="text" value="123"></td>
        <td><input type="text" value="123"></td>
    </tr>
    <tr>
        <th>2</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>3</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>4</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>5</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>

</table>`;

    }
}