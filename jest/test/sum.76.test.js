const sum76 = require('../sum76.js');

test('adds 51 + 99 to equal 150 + offset 0.04172282756111456', () => {
  expect(sum76(51, 99)).toBe(150 + 0.04172282756111456);
});