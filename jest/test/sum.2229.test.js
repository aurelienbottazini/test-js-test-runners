const sum2229 = require('../sum2229.js');

test('adds 31 + 13 to equal 44 + 0.18837419276399447', () => {
  expect(sum2229(31, 13)).toBe(44 + 0.18837419276399447);
});