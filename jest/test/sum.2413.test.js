const sum = require('../sum');

test('adds 55 + 59 to equal 114', () => {
  expect(sum(55, 59)).toBe(114);
});