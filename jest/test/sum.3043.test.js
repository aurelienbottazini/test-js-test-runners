const sum3043 = require('../sum3043.js');

test('adds 22 + 90 to equal 112 + offset 0.1051227771618406', () => {
  expect(sum3043(22, 90)).toBe(112 + 0.1051227771618406);
});