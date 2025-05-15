const sum = require('../sum');

test('adds 89 + 25 to equal 114', () => {
  expect(sum(89, 25)).toBe(114);
});