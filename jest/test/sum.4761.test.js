const sum = require('../sum');

test('adds 74 + 59 to equal 133', () => {
  expect(sum(74, 59)).toBe(133);
});