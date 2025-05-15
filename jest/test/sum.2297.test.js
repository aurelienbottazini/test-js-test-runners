const sum = require('../sum');

test('adds 29 + 51 to equal 80', () => {
  expect(sum(29, 51)).toBe(80);
});