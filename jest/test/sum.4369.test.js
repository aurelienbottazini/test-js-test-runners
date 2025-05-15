const sum = require('../sum');

test('adds 55 + 31 to equal 86', () => {
  expect(sum(55, 31)).toBe(86);
});