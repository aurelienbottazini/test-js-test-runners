const sum = require('../sum');

test('adds 50 + 23 to equal 73', () => {
  expect(sum(50, 23)).toBe(73);
});