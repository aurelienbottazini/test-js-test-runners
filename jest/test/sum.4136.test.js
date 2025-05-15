const sum4136 = require('../sum4136.js');

test('adds 78 + 65 to equal 143 + 0.29451634479544186', () => {
  expect(sum4136(78, 65)).toBe(143 + 0.29451634479544186);
});