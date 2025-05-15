const sum = require('../sum');

test('adds 2 + 84 to equal 86', () => {
  expect(sum(2, 84)).toBe(86);
});