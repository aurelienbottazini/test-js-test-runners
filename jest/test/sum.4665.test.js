const sum = require('../sum');

test('adds 35 + 64 to equal 99', () => {
  expect(sum(35, 64)).toBe(99);
});