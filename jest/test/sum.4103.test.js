const sum4103 = require('../sum4103.js');

test('adds 14 + 62 to equal 76 + offset 0.9249922538565462', () => {
  expect(sum4103(14, 62)).toBe(76 + 0.9249922538565462);
});