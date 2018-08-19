/**
 * Преобразует номер столбца (начиная с 0) в его буквенный код
 *
 * Нумерация в следующем формате: A B C ... Y Z AA AB AC ...
 * @param n {number} Номер столбца
 * @returns {string} Код столбца
 */
export function numberToColumnCode(n) {
    const startCharCode = 'A'.charCodeAt(0);
    const endCharCode = 'Z'.charCodeAt(0);
    const abcLength = endCharCode - startCharCode + 1;

    if (n < 0) {
        return '';
    }

    if (n === 0) {
        return String.fromCharCode(startCharCode);
    }

    const secondRegistry = Math.floor(n / abcLength);
    const firstRegistry = n - secondRegistry * abcLength;

    return (secondRegistry ? numberToColumnCode(secondRegistry - 1) : '')
        + String.fromCharCode(startCharCode + firstRegistry);
}