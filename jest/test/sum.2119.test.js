const sum = require('../sum');

test('adds 59 + 85 to equal 144', () => {
  expect(sum(59, 85)).toBe(144);
});