const sum = require('../sum');

test('adds 48 + 79 to equal 127', () => {
  expect(sum(48, 79)).toBe(127);
});