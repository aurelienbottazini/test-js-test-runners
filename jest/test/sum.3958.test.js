const sum = require('../sum');

test('adds 70 + 44 to equal 114', () => {
  expect(sum(70, 44)).toBe(114);
});