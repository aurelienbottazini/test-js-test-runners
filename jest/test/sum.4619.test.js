const sum4619 = require('../sum4619.js');

test('adds 19 + 32 to equal 51 + 0.7515196362837288', () => {
  expect(sum4619(19, 32)).toBe(51 + 0.7515196362837288);
});