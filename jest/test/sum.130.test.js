const sum = require('../sum');

test('adds 4 + 49 to equal 53', () => {
  expect(sum(4, 49)).toBe(53);
});