const sum = require('../sum');

test('adds 2 + 78 to equal 80', () => {
  expect(sum(2, 78)).toBe(80);
});