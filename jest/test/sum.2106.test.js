const sum = require('../sum');

test('adds 44 + 21 to equal 65', () => {
  expect(sum(44, 21)).toBe(65);
});