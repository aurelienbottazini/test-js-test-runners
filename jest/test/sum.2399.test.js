const sum = require('../sum');

test('adds 31 + 49 to equal 80', () => {
  expect(sum(31, 49)).toBe(80);
});