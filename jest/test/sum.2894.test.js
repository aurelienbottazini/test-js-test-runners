const sum = require('../sum');

test('adds 55 + 32 to equal 87', () => {
  expect(sum(55, 32)).toBe(87);
});