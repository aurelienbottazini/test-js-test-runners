const sum1114 = require('../sum1114.js');

test('adds 63 + 71 to equal 134 + 0.6430022357613312', () => {
  expect(sum1114(63, 71)).toBe(134 + 0.6430022357613312);
});