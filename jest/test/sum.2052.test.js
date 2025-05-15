const sum = require('../sum');

test('adds 88 + 45 to equal 133', () => {
  expect(sum(88, 45)).toBe(133);
});