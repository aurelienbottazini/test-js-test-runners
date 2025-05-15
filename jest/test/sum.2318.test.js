const sum = require('../sum');

test('adds 96 + 99 to equal 195', () => {
  expect(sum(96, 99)).toBe(195);
});