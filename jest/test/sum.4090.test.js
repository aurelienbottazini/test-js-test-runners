const sum = require('../sum');

test('adds 26 + 61 to equal 87', () => {
  expect(sum(26, 61)).toBe(87);
});