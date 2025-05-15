const sum = require('../sum');

test('adds 50 + 37 to equal 87', () => {
  expect(sum(50, 37)).toBe(87);
});