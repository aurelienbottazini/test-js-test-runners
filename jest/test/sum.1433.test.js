const sum = require('../sum');

test('adds 70 + 63 to equal 133', () => {
  expect(sum(70, 63)).toBe(133);
});