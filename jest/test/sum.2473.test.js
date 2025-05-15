const sum = require('../sum');

test('adds 95 + 38 to equal 133', () => {
  expect(sum(95, 38)).toBe(133);
});