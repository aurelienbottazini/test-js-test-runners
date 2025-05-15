const sum = require('../sum');

test('adds 78 + 55 to equal 133', () => {
  expect(sum(78, 55)).toBe(133);
});