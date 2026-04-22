/**
 * Unit tests for calculator.js
 *
 * Covers the four basic arithmetic operations:
 *   - add      : Addition (+)
 *   - subtract : Subtraction (-)
 *   - multiply : Multiplication (×)
 *   - divide   : Division (÷)
 *
 * Includes edge cases: division by zero, negatives, decimals, identity values.
 */

const { add, subtract, multiply, divide, modulo } = require('../calculator');

// ─── Addition (+) ────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('10 + 4 = 14', () => expect(add(10, 4)).toBe(14));
  test('45 + 2 = 47', () => expect(add(45, 2)).toBe(47));
  test('20 + 5 = 25', () => expect(add(20, 5)).toBe(25));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adding two negatives', () => expect(add(-3, -4)).toBe(-7));
  test('adding a negative and a positive', () => expect(add(-5, 10)).toBe(5));
  test('adding decimals', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// ─── Subtraction (-) ─────────────────────────────────────────────────────────
describe('subtract', () => {
  test('2 - 3 = -1', () => expect(subtract(2, 3)).toBe(-1));
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('45 - 2 = 43', () => expect(subtract(45, 2)).toBe(43));
  test('20 - 5 = 15', () => expect(subtract(20, 5)).toBe(15));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracting a larger number yields negative', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracting two negatives', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting decimals', () => expect(subtract(1.5, 0.5)).toBeCloseTo(1.0));
});

// ─── Multiplication (×) ──────────────────────────────────────────────────────
describe('multiply', () => {
  test('2 * 3 = 6', () => expect(multiply(2, 3)).toBe(6));
  test('10 * 4 = 40', () => expect(multiply(10, 4)).toBe(40));
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('20 * 5 = 100', () => expect(multiply(20, 5)).toBe(100));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(7, 1)).toBe(7));
  test('multiplying two negatives returns positive', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplying a negative and a positive returns negative', () => expect(multiply(-3, 4)).toBe(-12));
  test('multiplying decimals', () => expect(multiply(0.5, 4)).toBeCloseTo(2.0));
});

// ─── Division (÷) ────────────────────────────────────────────────────────────
describe('divide', () => {
  test('2 / 3 ≈ 0.667', () => expect(divide(2, 3)).toBeCloseTo(0.667));
  test('10 / 4 = 2.5', () => expect(divide(10, 4)).toBe(2.5));
  test('45 / 2 = 22.5', () => expect(divide(45, 2)).toBe(22.5));
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('dividing by one returns the same number', () => expect(divide(8, 1)).toBe(8));
  test('dividing zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));
  test('dividing two negatives returns positive', () => expect(divide(-10, -2)).toBe(5));
  test('dividing a negative by a positive returns negative', () => expect(divide(-10, 2)).toBe(-5));
  test('dividing by zero throws an error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
  test('dividing zero by zero throws an error', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── Modulo (%) ──────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('10 % 2 = 0 (even number)', () => expect(modulo(10, 2)).toBe(0));
  test('7 % 4 = 3', () => expect(modulo(7, 4)).toBe(3));
  test('0 % 5 = 0', () => expect(modulo(0, 5)).toBe(0));
  test('modulo by one always returns zero', () => expect(modulo(99, 1)).toBe(0));
  test('negative dividend: -7 % 3 = -1', () => expect(modulo(-7, 3)).toBe(-1));
  test('negative divisor: 7 % -3 = 1', () => expect(modulo(7, -3)).toBe(1));
  test('both negative: -7 % -3 = -1', () => expect(modulo(-7, -3)).toBe(-1));
  test('modulo by zero throws an error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero is not allowed.');
  });
  test('modulo zero by zero throws an error', () => {
    expect(() => modulo(0, 0)).toThrow('Division by zero is not allowed.');
  });
});
