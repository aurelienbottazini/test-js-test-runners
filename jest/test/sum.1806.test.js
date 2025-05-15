const sum = require('../sum');

test('adds 58 + 77 to equal 135', () => {
  expect(sum(58, 77)).toBe(135);
});