const sum = require('../sum');

test('adds 76 + 52 to equal 128', () => {
  expect(sum(76, 52)).toBe(128);
});