const sum = require('../sum');

test('adds 11 + 69 to equal 80', () => {
  expect(sum(11, 69)).toBe(80);
});