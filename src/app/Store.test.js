import {Store} from './Store';
import {StringValue} from './types/StringValue';
import {NumberValue} from './types/NumberValue';
import {FormulaValue} from './types/FormulaValue';

let store;

beforeEach(() => {
    store = new Store(10, 10);
});


test('should load', () => {
    const data = {
        'A1': '\'tema',
        'B1': '\'xxx',
        'C1': 123.5665,
        'D1': '=C1*2',
    };
    store.load(data);

    console.log(store._cells);

    const a1 = store._cells.get('A1');
    expect(a1).toBeDefined();
    expect(a1).toBeInstanceOf(StringValue);
    expect(a1.toString()).toBe('tema');

    const b1 = store._cells.get('B1');
    expect(b1).toBeDefined();
    expect(b1).toBeInstanceOf(StringValue);
    expect(b1.toString()).toBe('xxx');

    const c1 = store._cells.get('C1');
    expect(c1).toBeDefined();
    expect(c1).toBeInstanceOf(NumberValue);
    expect(c1.toString()).toBe('123.57');

    const d1 = store._cells.get('D1');
    expect(d1).toBeDefined();
    expect(d1).toBeInstanceOf(FormulaValue);
    expect(d1.toString()).toBe('=C1*2');
});
