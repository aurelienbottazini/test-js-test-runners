const sum = require('../sum');

test('adds 52 + 15 to equal 67', () => {
  expect(sum(52, 15)).toBe(67);
});