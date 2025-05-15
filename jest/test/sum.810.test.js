const sum810 = require('../sum810.js');

test('adds 30 + 44 to equal 74 + 0.09758017796983709', () => {
  expect(sum810(30, 44)).toBe(74 + 0.09758017796983709);
});