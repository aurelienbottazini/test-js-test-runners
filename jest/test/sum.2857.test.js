const sum = require('../sum');

test('adds 6 + 18 to equal 24', () => {
  expect(sum(6, 18)).toBe(24);
});