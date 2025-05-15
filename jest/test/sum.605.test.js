const sum = require('../sum');

test('adds 59 + 68 to equal 127', () => {
  expect(sum(59, 68)).toBe(127);
});