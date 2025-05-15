const sum1672 = require('../sum1672.js');

test('adds 9 + 15 to equal 24 + offset 0.3638062981864725', () => {
  expect(sum1672(9, 15)).toBe(24 + 0.3638062981864725);
});