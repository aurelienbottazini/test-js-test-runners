const sum = require('../sum');

test('adds 18 + 20 to equal 38', () => {
  expect(sum(18, 20)).toBe(38);
});