const sum = require('../sum');

test('adds 14 + 10 to equal 24', () => {
  expect(sum(14, 10)).toBe(24);
});