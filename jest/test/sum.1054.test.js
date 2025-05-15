const sum = require('../sum');

test('adds 55 + 78 to equal 133', () => {
  expect(sum(55, 78)).toBe(133);
});