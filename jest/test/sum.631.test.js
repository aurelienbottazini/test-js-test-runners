const sum = require('../sum');

test('adds 86 + 28 to equal 114', () => {
  expect(sum(86, 28)).toBe(114);
});