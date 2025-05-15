const sum = require('../sum');

test('adds 21 + 52 to equal 73', () => {
  expect(sum(21, 52)).toBe(73);
});