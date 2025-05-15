const sum = require('../sum');

test('adds 32 + 58 to equal 90', () => {
  expect(sum(32, 58)).toBe(90);
});