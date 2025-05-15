const sum3989 = require('../sum3989.js');

test('adds 60 + 74 to equal 134 + offset 0.4965987406981177', () => {
  expect(sum3989(60, 74)).toBe(134 + 0.4965987406981177);
});