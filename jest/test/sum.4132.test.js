const sum = require('../sum');

test('adds 43 + 90 to equal 133', () => {
  expect(sum(43, 90)).toBe(133);
});