const sum = require('../sum');

test('adds 45 + 15 to equal 60', () => {
  expect(sum(45, 15)).toBe(60);
});