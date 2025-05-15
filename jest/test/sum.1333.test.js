const sum = require('../sum');

test('adds 72 + 61 to equal 133', () => {
  expect(sum(72, 61)).toBe(133);
});