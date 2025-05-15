const sum = require('../sum');

test('adds 55 + 5 to equal 60', () => {
  expect(sum(55, 5)).toBe(60);
});