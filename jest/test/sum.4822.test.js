const sum = require('../sum');

test('adds 22 + 38 to equal 60', () => {
  expect(sum(22, 38)).toBe(60);
});