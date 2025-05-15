const sum = require('../sum');

test('adds 90 + 37 to equal 127', () => {
  expect(sum(90, 37)).toBe(127);
});