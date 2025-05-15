const sum = require('../sum');

test('adds 96 + 18 to equal 114', () => {
  expect(sum(96, 18)).toBe(114);
});