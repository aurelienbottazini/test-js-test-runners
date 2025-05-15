const sum = require('../sum');

test('adds 38 + 90 to equal 128', () => {
  expect(sum(38, 90)).toBe(128);
});