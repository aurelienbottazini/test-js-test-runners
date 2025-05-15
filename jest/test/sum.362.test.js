const sum = require('../sum');

test('adds 81 + 1 to equal 82', () => {
  expect(sum(81, 1)).toBe(82);
});