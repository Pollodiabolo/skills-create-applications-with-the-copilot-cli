/**
 * Node.js CLI Calculator
 *
 * Supports five arithmetic operations:
 *   - add      : Addition (+)
 *   - subtract : Subtraction (-)
 *   - multiply : Multiplication (×)
 *   - divide   : Division (÷) with division-by-zero handling
 *   - modulo   : Remainder (%) with division-by-zero handling
 *
 * Usage:
 *   node calculator.js add 5 3        # => 8
 *   node calculator.js subtract 9 4   # => 5
 *   node calculator.js multiply 6 7   # => 42
 *   node calculator.js divide 10 2    # => 5
 *   node calculator.js modulo 10 3    # => 1
 */

const [,, operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

/** Addition: returns the sum of a and b */
function add(a, b) {
  return a + b;
}

/** Subtraction: returns the difference of a minus b */
function subtract(a, b) {
  return a - b;
}

/** Multiplication: returns the product of a and b */
function multiply(a, b) {
  return a * b;
}

/** Division: returns the quotient of a divided by b; errors on divide-by-zero */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/** Modulo: returns the remainder of a divided by b; errors on divide-by-zero */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a % b;
}

module.exports = { add, subtract, multiply, divide, modulo };

// Only run CLI logic when executed directly (not when imported by tests)
if (require.main === module) {
  if (!operation || isNaN(a) || isNaN(b)) {
    console.log('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  let result;
  switch (operation.toLowerCase()) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case 'modulo':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, or modulo.`);
      process.exit(1);
  }

  console.log(result);
}
