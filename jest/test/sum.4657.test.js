const sum = require('../sum');

test('adds 92 + 35 to equal 127', () => {
  expect(sum(92, 35)).toBe(127);
});