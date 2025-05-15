const sum3067 = require('../sum3067.js');

test('adds 37 + 62 to equal 99 + offset 0.24169871357827566', () => {
  expect(sum3067(37, 62)).toBe(99 + 0.24169871357827566);
});