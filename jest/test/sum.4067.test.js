const sum = require('../sum');

test('adds 69 + 3 to equal 72', () => {
  expect(sum(69, 3)).toBe(72);
});