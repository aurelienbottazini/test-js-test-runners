const sum = require('../sum');

test('adds 23 + 64 to equal 87', () => {
  expect(sum(23, 64)).toBe(87);
});