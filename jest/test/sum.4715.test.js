const sum = require('../sum');

test('adds 27 + 29 to equal 56', () => {
  expect(sum(27, 29)).toBe(56);
});