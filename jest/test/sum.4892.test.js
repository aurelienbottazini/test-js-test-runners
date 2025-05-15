const sum = require('../sum');

test('adds 9 + 78 to equal 87', () => {
  expect(sum(9, 78)).toBe(87);
});