const sum = require('../sum');

test('adds 40 + 93 to equal 133', () => {
  expect(sum(40, 93)).toBe(133);
});