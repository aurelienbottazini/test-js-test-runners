const sum = require('../sum');

test('adds 91 + 29 to equal 120', () => {
  expect(sum(91, 29)).toBe(120);
});