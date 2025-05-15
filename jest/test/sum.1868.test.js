const sum1868 = require('../sum1868.js');

test('adds 5 + 37 to equal 42 + offset 0.14644485319492906', () => {
  expect(sum1868(5, 37)).toBe(42 + 0.14644485319492906);
});