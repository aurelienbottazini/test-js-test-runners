const sum = require('../sum');

test('adds 45 + 88 to equal 133', () => {
  expect(sum(45, 88)).toBe(133);
});