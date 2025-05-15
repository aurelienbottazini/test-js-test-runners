const sum = require('../sum');

test('adds 71 + 69 to equal 140', () => {
  expect(sum(71, 69)).toBe(140);
});