const sum = require('../sum');

test('adds 80 + 40 to equal 120', () => {
  expect(sum(80, 40)).toBe(120);
});