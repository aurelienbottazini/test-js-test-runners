const sum = require('../sum');

test('adds 79 + 56 to equal 135', () => {
  expect(sum(79, 56)).toBe(135);
});