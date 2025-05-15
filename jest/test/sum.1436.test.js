const sum1436 = require('../sum1436.js');

test('adds 53 + 52 to equal 105 + 0.5892012819205342', () => {
  expect(sum1436(53, 52)).toBe(105 + 0.5892012819205342);
});