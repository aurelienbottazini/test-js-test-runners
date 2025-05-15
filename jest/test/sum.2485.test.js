const sum = require('../sum');

test('adds 9 + 41 to equal 50', () => {
  expect(sum(9, 41)).toBe(50);
});