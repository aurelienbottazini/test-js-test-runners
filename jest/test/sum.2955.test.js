const sum2955 = require('../sum2955.js');

test('adds 87 + 2 to equal 89 + 0.8706748521781101', () => {
  expect(sum2955(87, 2)).toBe(89 + 0.8706748521781101);
});