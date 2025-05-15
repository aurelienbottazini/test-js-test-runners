const sum = require('../sum');

test('adds 28 + 59 to equal 87', () => {
  expect(sum(28, 59)).toBe(87);
});