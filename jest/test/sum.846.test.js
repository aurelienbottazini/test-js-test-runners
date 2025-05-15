const sum = require('../sum');

test('adds 56 + 90 to equal 146', () => {
  expect(sum(56, 90)).toBe(146);
});