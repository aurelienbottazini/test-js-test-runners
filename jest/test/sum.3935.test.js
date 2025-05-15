const sum3935 = require('../sum3935.js');

test('adds 90 + 91 to equal 181 + 0.6687974528316415', () => {
  expect(sum3935(90, 91)).toBe(181 + 0.6687974528316415);
});