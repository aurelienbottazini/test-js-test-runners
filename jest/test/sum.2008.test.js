const sum = require('../sum');

test('adds 40 + 95 to equal 135', () => {
  expect(sum(40, 95)).toBe(135);
});