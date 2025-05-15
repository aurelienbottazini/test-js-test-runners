const sum = require('../sum');

test('adds 75 + 2 to equal 77', () => {
  expect(sum(75, 2)).toBe(77);
});