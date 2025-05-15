const sum = require('../sum');

test('adds 19 + 68 to equal 87', () => {
  expect(sum(19, 68)).toBe(87);
});