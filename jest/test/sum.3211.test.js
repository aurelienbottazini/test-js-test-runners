const sum = require('../sum');

test('adds 83 + 50 to equal 133', () => {
  expect(sum(83, 50)).toBe(133);
});