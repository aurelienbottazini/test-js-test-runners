const sum = require('../sum');

test('adds 79 + 3 to equal 82', () => {
  expect(sum(79, 3)).toBe(82);
});