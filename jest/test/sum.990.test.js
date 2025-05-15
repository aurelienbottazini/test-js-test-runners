const sum = require('../sum');

test('adds 10 + 77 to equal 87', () => {
  expect(sum(10, 77)).toBe(87);
});