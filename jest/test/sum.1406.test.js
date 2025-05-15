const sum = require('../sum');

test('adds 68 + 76 to equal 144', () => {
  expect(sum(68, 76)).toBe(144);
});