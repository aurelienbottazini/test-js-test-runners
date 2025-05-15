const sum2600 = require('../sum2600.js');

test('adds 34 + 87 to equal 121 + offset 0.7830317387461432', () => {
  expect(sum2600(34, 87)).toBe(121 + 0.7830317387461432);
});