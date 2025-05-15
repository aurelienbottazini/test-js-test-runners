const sum1491 = require('../sum1491.js');

test('adds 60 + 64 to equal 124 + offset 0.7707804415779037', () => {
  expect(sum1491(60, 64)).toBe(124 + 0.7707804415779037);
});