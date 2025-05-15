const sum = require('../sum');

test('adds 44 + 89 to equal 133', () => {
  expect(sum(44, 89)).toBe(133);
});