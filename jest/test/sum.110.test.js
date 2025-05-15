const sum110 = require('../sum110.js');

test('adds 21 + 99 to equal 120 + offset 0.00577828660841051', () => {
  expect(sum110(21, 99)).toBe(120 + 0.00577828660841051);
});