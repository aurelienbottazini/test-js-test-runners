const sum870 = require('../sum870.js');

test('adds 4 + 17 to equal 21 + offset 0.7138064612064646', () => {
  expect(sum870(4, 17)).toBe(21 + 0.7138064612064646);
});