const sum = require('../sum');

test('adds 18 + 55 to equal 73', () => {
  expect(sum(18, 55)).toBe(73);
});