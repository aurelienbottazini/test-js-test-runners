const sum = require('../sum');

test('adds 90 + 38 to equal 128', () => {
  expect(sum(90, 38)).toBe(128);
});