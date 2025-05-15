const sum = require('../sum');

test('adds 37 + 96 to equal 133', () => {
  expect(sum(37, 96)).toBe(133);
});