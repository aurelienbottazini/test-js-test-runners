const sum = require('../sum');

test('adds 2 + 80 to equal 82', () => {
  expect(sum(2, 80)).toBe(82);
});