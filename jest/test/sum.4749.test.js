const sum = require('../sum');

test('adds 77 + 41 to equal 118', () => {
  expect(sum(77, 41)).toBe(118);
});