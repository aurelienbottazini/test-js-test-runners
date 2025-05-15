const sum1213 = require('../sum1213.js');

test('adds 7 + 32 to equal 39 + 0.5756379155285619', () => {
  expect(sum1213(7, 32)).toBe(39 + 0.5756379155285619);
});