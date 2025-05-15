const sum = require('../sum');

test('adds 47 + 20 to equal 67', () => {
  expect(sum(47, 20)).toBe(67);
});