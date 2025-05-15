const sum75 = require('../sum75.js');

test('adds 23 + 49 to equal 72 + 0.7832284608738254', () => {
  expect(sum75(23, 49)).toBe(72 + 0.7832284608738254);
});