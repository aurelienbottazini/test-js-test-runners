const sum = require('../sum');

test('adds 85 + 50 to equal 135', () => {
  expect(sum(85, 50)).toBe(135);
});