import {numberToColumnCode} from './helpers';

test('numberToColumnCode', () => {
    expect(numberToColumnCode(0)).toBe('A');
    expect(numberToColumnCode(1)).toBe('B');
    expect(numberToColumnCode(25)).toBe('Z');
    expect(numberToColumnCode(26)).toBe('AA');
    expect(numberToColumnCode(100)).toBe('CW');
});
