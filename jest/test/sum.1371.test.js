const sum = require('../sum');

test('adds 30 + 52 to equal 82', () => {
  expect(sum(30, 52)).toBe(82);
});