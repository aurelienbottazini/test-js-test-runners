const sum = require('../sum');

test('adds 86 + 85 to equal 171', () => {
  expect(sum(86, 85)).toBe(171);
});