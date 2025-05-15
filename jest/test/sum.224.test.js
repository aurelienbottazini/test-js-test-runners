const sum = require('../sum');

test('adds 48 + 98 to equal 146', () => {
  expect(sum(48, 98)).toBe(146);
});