const sum = require('../sum');

test('adds 77 + 43 to equal 120', () => {
  expect(sum(77, 43)).toBe(120);
});