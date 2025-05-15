const sum = require('../sum');

test('adds 4 + 41 to equal 45', () => {
  expect(sum(4, 41)).toBe(45);
});