const sum = require('../sum');

test('adds 95 + 40 to equal 135', () => {
  expect(sum(95, 40)).toBe(135);
});