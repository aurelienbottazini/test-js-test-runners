const sum = require('../sum');

test('adds 60 + 22 to equal 82', () => {
  expect(sum(60, 22)).toBe(82);
});