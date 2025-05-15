const sum = require('../sum');

test('adds 73 + 85 to equal 158', () => {
  expect(sum(73, 85)).toBe(158);
});