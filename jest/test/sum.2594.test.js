const sum = require('../sum');

test('adds 67 + 32 to equal 99', () => {
  expect(sum(67, 32)).toBe(99);
});