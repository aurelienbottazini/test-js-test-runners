const sum3180 = require('../sum3180.js');

test('adds 76 + 1 to equal 77 + 0.2762144212836707', () => {
  expect(sum3180(76, 1)).toBe(77 + 0.2762144212836707);
});