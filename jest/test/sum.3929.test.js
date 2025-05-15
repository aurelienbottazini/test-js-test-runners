const sum = require('../sum');

test('adds 37 + 36 to equal 73', () => {
  expect(sum(37, 36)).toBe(73);
});