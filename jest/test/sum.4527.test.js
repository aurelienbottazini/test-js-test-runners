const sum = require('../sum');

test('adds 49 + 51 to equal 100', () => {
  expect(sum(49, 51)).toBe(100);
});