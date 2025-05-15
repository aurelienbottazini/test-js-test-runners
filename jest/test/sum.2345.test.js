const sum = require('../sum');

test('adds 44 + 84 to equal 128', () => {
  expect(sum(44, 84)).toBe(128);
});