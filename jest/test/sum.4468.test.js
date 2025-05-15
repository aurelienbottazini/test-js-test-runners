const sum = require('../sum');

test('adds 78 + 21 to equal 99', () => {
  expect(sum(78, 21)).toBe(99);
});