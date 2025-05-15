const sum = require('../sum');

test('adds 53 + 74 to equal 127', () => {
  expect(sum(53, 74)).toBe(127);
});