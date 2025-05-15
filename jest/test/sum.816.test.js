const sum816 = require('../sum816.js');

test('adds 3 + 37 to equal 40 + 0.5648406716418112', () => {
  expect(sum816(3, 37)).toBe(40 + 0.5648406716418112);
});