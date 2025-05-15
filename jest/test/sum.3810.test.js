const sum = require('../sum');

test('adds 69 + 58 to equal 127', () => {
  expect(sum(69, 58)).toBe(127);
});