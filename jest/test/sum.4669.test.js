const sum = require('../sum');

test('adds 13 + 17 to equal 30', () => {
  expect(sum(13, 17)).toBe(30);
});