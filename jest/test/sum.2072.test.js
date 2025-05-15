const sum = require('../sum');

test('adds 20 + 67 to equal 87', () => {
  expect(sum(20, 67)).toBe(87);
});