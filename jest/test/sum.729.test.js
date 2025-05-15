const sum = require('../sum');

test('adds 67 + 6 to equal 73', () => {
  expect(sum(67, 6)).toBe(73);
});