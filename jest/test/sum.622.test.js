const sum = require('../sum');

test('adds 10 + 70 to equal 80', () => {
  expect(sum(10, 70)).toBe(80);
});