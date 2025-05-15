const sum2695 = require('../sum2695.js');

test('adds 43 + 78 to equal 121 + offset 0.45488307730362687', () => {
  expect(sum2695(43, 78)).toBe(121 + 0.45488307730362687);
});