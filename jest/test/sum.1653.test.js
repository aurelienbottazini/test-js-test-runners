const sum = require('../sum');

test('adds 61 + 4 to equal 65', () => {
  expect(sum(61, 4)).toBe(65);
});