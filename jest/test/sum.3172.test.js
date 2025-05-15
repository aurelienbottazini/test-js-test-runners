const sum = require('../sum');

test('adds 7 + 70 to equal 77', () => {
  expect(sum(7, 70)).toBe(77);
});