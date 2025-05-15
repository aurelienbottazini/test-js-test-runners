const sum = require('../sum');

test('adds 59 + 35 to equal 94', () => {
  expect(sum(59, 35)).toBe(94);
});