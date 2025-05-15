const sum = require('../sum');

test('adds 11 + 56 to equal 67', () => {
  expect(sum(11, 56)).toBe(67);
});