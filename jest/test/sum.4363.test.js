const sum = require('../sum');

test('adds 15 + 67 to equal 82', () => {
  expect(sum(15, 67)).toBe(82);
});