const sum = require('../sum');

test('adds 58 + 19 to equal 77', () => {
  expect(sum(58, 19)).toBe(77);
});