const sum = require('../sum');

test('adds 60 + 17 to equal 77', () => {
  expect(sum(60, 17)).toBe(77);
});