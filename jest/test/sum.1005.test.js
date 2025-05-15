const sum = require('../sum');

test('adds 35 + 38 to equal 73', () => {
  expect(sum(35, 38)).toBe(73);
});