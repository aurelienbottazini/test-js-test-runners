const sum = require('../sum');

test('adds 79 + 41 to equal 120', () => {
  expect(sum(79, 41)).toBe(120);
});