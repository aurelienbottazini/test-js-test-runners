const sum1810 = require('../sum1810.js');

test('adds 39 + 35 to equal 74 + offset 0.9765649755605775', () => {
  expect(sum1810(39, 35)).toBe(74 + 0.9765649755605775);
});