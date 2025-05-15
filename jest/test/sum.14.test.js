const sum = require('../sum');

test('adds 59 + 69 to equal 128', () => {
  expect(sum(59, 69)).toBe(128);
});