const sum = require('../sum');

test('adds 41 + 41 to equal 82', () => {
  expect(sum(41, 41)).toBe(82);
});