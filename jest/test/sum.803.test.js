const sum = require('../sum');

test('adds 54 + 92 to equal 146', () => {
  expect(sum(54, 92)).toBe(146);
});