const sum = require('../sum');

test('adds 36 + 97 to equal 133', () => {
  expect(sum(36, 97)).toBe(133);
});