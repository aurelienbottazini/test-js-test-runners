const sum = require('../sum');

test('adds 89 + 95 to equal 184', () => {
  expect(sum(89, 95)).toBe(184);
});