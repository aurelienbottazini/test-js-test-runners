const sum = require('../sum');

test('adds 48 + 12 to equal 60', () => {
  expect(sum(48, 12)).toBe(60);
});