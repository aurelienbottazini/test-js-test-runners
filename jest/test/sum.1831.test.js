const sum = require('../sum');

test('adds 58 + 75 to equal 133', () => {
  expect(sum(58, 75)).toBe(133);
});