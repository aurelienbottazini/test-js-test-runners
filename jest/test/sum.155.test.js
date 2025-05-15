const sum = require('../sum');

test('adds 49 + 18 to equal 67', () => {
  expect(sum(49, 18)).toBe(67);
});