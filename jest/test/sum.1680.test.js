const sum = require('../sum');

test('adds 70 + 29 to equal 99', () => {
  expect(sum(70, 29)).toBe(99);
});