const sum2437 = require('../sum2437.js');

test('adds 67 + 48 to equal 115 + offset 0.1321784216747629', () => {
  expect(sum2437(67, 48)).toBe(115 + 0.1321784216747629);
});