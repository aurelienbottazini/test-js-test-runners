const sum = require('../sum');

test('adds 95 + 32 to equal 127', () => {
  expect(sum(95, 32)).toBe(127);
});