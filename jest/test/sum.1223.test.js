const sum1223 = require('../sum1223.js');

test('adds 16 + 42 to equal 58 + 0.4340436674103597', () => {
  expect(sum1223(16, 42)).toBe(58 + 0.4340436674103597);
});