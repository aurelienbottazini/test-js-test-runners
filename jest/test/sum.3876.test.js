const sum = require('../sum');

test('adds 9 + 7 to equal 16', () => {
  expect(sum(9, 7)).toBe(16);
});