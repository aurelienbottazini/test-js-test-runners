const sum = require('../sum');

test('adds 6 + 29 to equal 35', () => {
  expect(sum(6, 29)).toBe(35);
});