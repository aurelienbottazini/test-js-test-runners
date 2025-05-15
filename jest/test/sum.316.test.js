const sum = require('../sum');

test('adds 35 + 51 to equal 86', () => {
  expect(sum(35, 51)).toBe(86);
});