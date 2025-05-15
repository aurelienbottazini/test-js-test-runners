const sum = require('../sum');

test('adds 39 + 33 to equal 72', () => {
  expect(sum(39, 33)).toBe(72);
});