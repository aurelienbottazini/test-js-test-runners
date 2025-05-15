const sum = require('../sum');

test('adds 39 + 43 to equal 82', () => {
  expect(sum(39, 43)).toBe(82);
});