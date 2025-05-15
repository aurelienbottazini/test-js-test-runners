const sum1320 = require('../sum1320.js');

test('adds 77 + 78 to equal 155 + 0.2695577480723549', () => {
  expect(sum1320(77, 78)).toBe(155 + 0.2695577480723549);
});