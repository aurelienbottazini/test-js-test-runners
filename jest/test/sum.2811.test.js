const sum = require('../sum');

test('adds 25 + 62 to equal 87', () => {
  expect(sum(25, 62)).toBe(87);
});