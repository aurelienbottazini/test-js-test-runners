const sum = require('../sum');

test('adds 68 + 12 to equal 80', () => {
  expect(sum(68, 12)).toBe(80);
});