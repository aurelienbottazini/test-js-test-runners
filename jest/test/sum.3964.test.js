const sum3964 = require('../sum3964.js');

test('adds 37 + 75 to equal 112 + 0.007235243157297067', () => {
  expect(sum3964(37, 75)).toBe(112 + 0.007235243157297067);
});