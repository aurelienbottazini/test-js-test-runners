const sum = require('../sum');

test('adds 81 + 52 to equal 133', () => {
  expect(sum(81, 52)).toBe(133);
});