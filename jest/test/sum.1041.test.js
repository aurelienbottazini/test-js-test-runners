const sum = require('../sum');

test('adds 23 + 3 to equal 26', () => {
  expect(sum(23, 3)).toBe(26);
});