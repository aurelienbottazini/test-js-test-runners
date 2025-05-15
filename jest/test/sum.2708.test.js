const sum = require('../sum');

test('adds 27 + 58 to equal 85', () => {
  expect(sum(27, 58)).toBe(85);
});