const sum = require('../sum');

test('adds 62 + 3 to equal 65', () => {
  expect(sum(62, 3)).toBe(65);
});