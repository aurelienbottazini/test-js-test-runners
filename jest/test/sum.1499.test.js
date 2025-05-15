const sum1499 = require('../sum1499.js');

test('adds 63 + 67 to equal 130 + 0.8014262626691584', () => {
  expect(sum1499(63, 67)).toBe(130 + 0.8014262626691584);
});