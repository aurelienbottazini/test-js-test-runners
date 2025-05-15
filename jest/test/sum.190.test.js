const sum = require('../sum');

test('adds 42 + 91 to equal 133', () => {
  expect(sum(42, 91)).toBe(133);
});