const sum = require('../sum');

test('adds 7 + 80 to equal 87', () => {
  expect(sum(7, 80)).toBe(87);
});