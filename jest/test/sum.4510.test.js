const sum = require('../sum');

test('adds 47 + 99 to equal 146', () => {
  expect(sum(47, 99)).toBe(146);
});