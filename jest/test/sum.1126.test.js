const sum = require('../sum');

test('adds 44 + 83 to equal 127', () => {
  expect(sum(44, 83)).toBe(127);
});