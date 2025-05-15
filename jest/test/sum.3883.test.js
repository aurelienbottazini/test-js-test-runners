const sum3883 = require('../sum3883.js');

test('adds 80 + 82 to equal 162 + offset 0.9102986998941124', () => {
  expect(sum3883(80, 82)).toBe(162 + 0.9102986998941124);
});