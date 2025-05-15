const sum = require('../sum');

test('adds 62 + 71 to equal 133', () => {
  expect(sum(62, 71)).toBe(133);
});