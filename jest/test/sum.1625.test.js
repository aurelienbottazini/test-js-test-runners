const sum = require('../sum');

test('adds 4 + 69 to equal 73', () => {
  expect(sum(4, 69)).toBe(73);
});