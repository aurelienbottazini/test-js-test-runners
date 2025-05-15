const sum = require('../sum');

test('adds 89 + 44 to equal 133', () => {
  expect(sum(89, 44)).toBe(133);
});