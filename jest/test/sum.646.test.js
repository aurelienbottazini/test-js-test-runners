const sum = require('../sum');

test('adds 71 + 62 to equal 133', () => {
  expect(sum(71, 62)).toBe(133);
});