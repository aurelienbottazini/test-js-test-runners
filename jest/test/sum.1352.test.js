const sum = require('../sum');

test('adds 68 + 90 to equal 158', () => {
  expect(sum(68, 90)).toBe(158);
});