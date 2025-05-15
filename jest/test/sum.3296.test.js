const sum = require('../sum');

test('adds 78 + 2 to equal 80', () => {
  expect(sum(78, 2)).toBe(80);
});