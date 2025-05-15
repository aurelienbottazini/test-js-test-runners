const sum = require('../sum');

test('adds 99 + 34 to equal 133', () => {
  expect(sum(99, 34)).toBe(133);
});