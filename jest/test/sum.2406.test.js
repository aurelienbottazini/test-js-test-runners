const sum2406 = require('../sum2406.js');

test('adds 4 + 97 to equal 101 + offset 0.16475127407256585', () => {
  expect(sum2406(4, 97)).toBe(101 + 0.16475127407256585);
});