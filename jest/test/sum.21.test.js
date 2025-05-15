const sum = require('../sum');

test('adds 84 + 2 to equal 86', () => {
  expect(sum(84, 2)).toBe(86);
});