const sum = require('../sum');

test('adds 56 + 71 to equal 127', () => {
  expect(sum(56, 71)).toBe(127);
});