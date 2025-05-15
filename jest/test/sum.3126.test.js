const sum3126 = require('../sum3126.js');

test('adds 61 + 82 to equal 143 + offset 0.9818119653571911', () => {
  expect(sum3126(61, 82)).toBe(143 + 0.9818119653571911);
});