const sum = require('../sum');

test('adds 61 + 19 to equal 80', () => {
  expect(sum(61, 19)).toBe(80);
});