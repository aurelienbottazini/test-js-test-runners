const sum = require('../sum');

test('adds 33 + 94 to equal 127', () => {
  expect(sum(33, 94)).toBe(127);
});