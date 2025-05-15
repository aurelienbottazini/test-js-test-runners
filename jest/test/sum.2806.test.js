const sum = require('../sum');

test('adds 65 + 0 to equal 65', () => {
  expect(sum(65, 0)).toBe(65);
});