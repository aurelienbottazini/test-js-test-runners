const sum = require('../sum');

test('adds 79 + 48 to equal 127', () => {
  expect(sum(79, 48)).toBe(127);
});