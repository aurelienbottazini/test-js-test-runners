const sum = require('../sum');

test('adds 34 + 80 to equal 114', () => {
  expect(sum(34, 80)).toBe(114);
});