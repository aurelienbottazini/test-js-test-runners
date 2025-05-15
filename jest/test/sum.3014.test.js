const sum = require('../sum');

test('adds 54 + 23 to equal 77', () => {
  expect(sum(54, 23)).toBe(77);
});