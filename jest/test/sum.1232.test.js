const sum = require('../sum');

test('adds 80 + 55 to equal 135', () => {
  expect(sum(80, 55)).toBe(135);
});