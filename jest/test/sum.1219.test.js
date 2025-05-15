const sum = require('../sum');

test('adds 71 + 11 to equal 82', () => {
  expect(sum(71, 11)).toBe(82);
});