const sum = require('../sum');

test('adds 97 + 29 to equal 126', () => {
  expect(sum(97, 29)).toBe(126);
});