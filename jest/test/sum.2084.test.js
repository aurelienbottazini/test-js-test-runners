const sum = require('../sum');

test('adds 40 + 80 to equal 120', () => {
  expect(sum(40, 80)).toBe(120);
});