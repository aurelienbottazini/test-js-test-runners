const sum4915 = require('../sum4915.js');

test('adds 61 + 44 to equal 105 + offset 0.2007773965320102', () => {
  expect(sum4915(61, 44)).toBe(105 + 0.2007773965320102);
});