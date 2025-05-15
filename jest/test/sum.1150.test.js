const sum1150 = require('../sum1150.js');

test('adds 51 + 84 to equal 135 + offset 0.02196220604284338', () => {
  expect(sum1150(51, 84)).toBe(135 + 0.02196220604284338);
});