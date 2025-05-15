const sum1222 = require('../sum1222.js');

test('adds 85 + 85 to equal 170 + offset 0.9804584952539391', () => {
  expect(sum1222(85, 85)).toBe(170 + 0.9804584952539391);
});