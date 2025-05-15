const sum = require('../sum');

test('adds 37 + 40 to equal 77', () => {
  expect(sum(37, 40)).toBe(77);
});