const sum = require('../sum');

test('adds 30 + 70 to equal 100', () => {
  expect(sum(30, 70)).toBe(100);
});