const sum = require('../sum');

test('adds 47 + 73 to equal 120', () => {
  expect(sum(47, 73)).toBe(120);
});