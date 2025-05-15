const sum = require('../sum');

test('adds 69 + 64 to equal 133', () => {
  expect(sum(69, 64)).toBe(133);
});