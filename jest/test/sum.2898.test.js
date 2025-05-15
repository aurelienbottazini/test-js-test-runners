const sum2898 = require('../sum2898.js');

test('adds 23 + 13 to equal 36 + offset 0.2742556779143467', () => {
  expect(sum2898(23, 13)).toBe(36 + 0.2742556779143467);
});