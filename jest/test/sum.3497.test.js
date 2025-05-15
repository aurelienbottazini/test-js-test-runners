const sum = require('../sum');

test('adds 5 + 93 to equal 98', () => {
  expect(sum(5, 93)).toBe(98);
});