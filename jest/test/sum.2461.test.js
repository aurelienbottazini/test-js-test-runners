const sum = require('../sum');

test('adds 39 + 51 to equal 90', () => {
  expect(sum(39, 51)).toBe(90);
});