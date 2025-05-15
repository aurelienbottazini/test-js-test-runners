const sum = require('../sum');

test('adds 74 + 53 to equal 127', () => {
  expect(sum(74, 53)).toBe(127);
});