const sum = require('../sum');

test('adds 24 + 49 to equal 73', () => {
  expect(sum(24, 49)).toBe(73);
});