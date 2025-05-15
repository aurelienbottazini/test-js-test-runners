const sum = require('../sum');

test('adds 86 + 47 to equal 133', () => {
  expect(sum(86, 47)).toBe(133);
});