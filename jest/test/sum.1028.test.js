const sum = require('../sum');

test('adds 42 + 93 to equal 135', () => {
  expect(sum(42, 93)).toBe(135);
});