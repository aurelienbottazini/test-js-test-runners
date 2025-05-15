const sum = require('../sum');

test('adds 94 + 41 to equal 135', () => {
  expect(sum(94, 41)).toBe(135);
});