const sum = require('../sum');

test('adds 56 + 79 to equal 135', () => {
  expect(sum(56, 79)).toBe(135);
});