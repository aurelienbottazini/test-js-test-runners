const sum = require('../sum');

test('adds 49 + 84 to equal 133', () => {
  expect(sum(49, 84)).toBe(133);
});