const sum = require('../sum');

test('adds 30 + 50 to equal 80', () => {
  expect(sum(30, 50)).toBe(80);
});