const sum = require('../sum');

test('adds 96 + 50 to equal 146', () => {
  expect(sum(96, 50)).toBe(146);
});