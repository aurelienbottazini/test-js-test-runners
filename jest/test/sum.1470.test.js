const sum = require('../sum');

test('adds 65 + 15 to equal 80', () => {
  expect(sum(65, 15)).toBe(80);
});