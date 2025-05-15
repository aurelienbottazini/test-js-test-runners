const sum = require('../sum');

test('adds 56 + 99 to equal 155', () => {
  expect(sum(56, 99)).toBe(155);
});