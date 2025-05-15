const sum1631 = require('../sum1631.js');

test('adds 73 + 35 to equal 108 + offset 0.946450004976414', () => {
  expect(sum1631(73, 35)).toBe(108 + 0.946450004976414);
});