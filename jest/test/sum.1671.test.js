const sum1671 = require('../sum1671.js');

test('adds 69 + 79 to equal 148 + offset 0.522699712228947', () => {
  expect(sum1671(69, 79)).toBe(148 + 0.522699712228947);
});