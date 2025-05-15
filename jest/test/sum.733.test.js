const sum = require('../sum');

test('adds 41 + 87 to equal 128', () => {
  expect(sum(41, 87)).toBe(128);
});