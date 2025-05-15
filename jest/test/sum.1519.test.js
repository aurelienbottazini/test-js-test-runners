const sum = require('../sum');

test('adds 47 + 86 to equal 133', () => {
  expect(sum(47, 86)).toBe(133);
});