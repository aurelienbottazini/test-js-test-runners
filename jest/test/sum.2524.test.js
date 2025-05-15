const sum = require('../sum');

test('adds 65 + 55 to equal 120', () => {
  expect(sum(65, 55)).toBe(120);
});