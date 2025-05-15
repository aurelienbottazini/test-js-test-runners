const sum = require('../sum');

test('adds 61 + 21 to equal 82', () => {
  expect(sum(61, 21)).toBe(82);
});