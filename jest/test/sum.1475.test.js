const sum = require('../sum');

test('adds 31 + 97 to equal 128', () => {
  expect(sum(31, 97)).toBe(128);
});