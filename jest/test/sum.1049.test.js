const sum = require('../sum');

test('adds 59 + 14 to equal 73', () => {
  expect(sum(59, 14)).toBe(73);
});