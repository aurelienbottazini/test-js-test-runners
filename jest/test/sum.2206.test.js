const sum = require('../sum');

test('adds 20 + 18 to equal 38', () => {
  expect(sum(20, 18)).toBe(38);
});