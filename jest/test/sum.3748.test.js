const sum = require('../sum');

test('adds 15 + 15 to equal 30', () => {
  expect(sum(15, 15)).toBe(30);
});