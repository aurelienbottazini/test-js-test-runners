const sum3402 = require('../sum3402.js');

test('adds 9 + 2 to equal 11 + offset 0.8559123004338617', () => {
  expect(sum3402(9, 2)).toBe(11 + 0.8559123004338617);
});