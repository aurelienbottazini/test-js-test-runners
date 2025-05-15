const sum = require('../sum');

test('adds 70 + 2 to equal 72', () => {
  expect(sum(70, 2)).toBe(72);
});