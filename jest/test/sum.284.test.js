const sum = require('../sum');

test('adds 37 + 98 to equal 135', () => {
  expect(sum(37, 98)).toBe(135);
});