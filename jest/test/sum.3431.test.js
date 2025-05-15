const sum3431 = require('../sum3431.js');

test('adds 36 + 26 to equal 62 + 0.9325489958910733', () => {
  expect(sum3431(36, 26)).toBe(62 + 0.9325489958910733);
});