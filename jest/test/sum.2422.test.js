const sum = require('../sum');

test('adds 94 + 34 to equal 128', () => {
  expect(sum(94, 34)).toBe(128);
});