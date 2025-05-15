const sum = require('../sum');

test('adds 18 + 6 to equal 24', () => {
  expect(sum(18, 6)).toBe(24);
});