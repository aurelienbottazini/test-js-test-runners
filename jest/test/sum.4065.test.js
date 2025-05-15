const sum4065 = require('../sum4065.js');

test('adds 40 + 38 to equal 78 + offset 0.6367914254825129', () => {
  expect(sum4065(40, 38)).toBe(78 + 0.6367914254825129);
});