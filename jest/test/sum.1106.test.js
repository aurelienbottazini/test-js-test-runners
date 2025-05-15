const sum = require('../sum');

test('adds 30 + 90 to equal 120', () => {
  expect(sum(30, 90)).toBe(120);
});