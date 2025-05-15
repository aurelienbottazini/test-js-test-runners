const sum = require('../sum');

test('adds 37 + 16 to equal 53', () => {
  expect(sum(37, 16)).toBe(53);
});