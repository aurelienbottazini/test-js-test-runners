const sum = require('../sum');

test('adds 25 + 48 to equal 73', () => {
  expect(sum(25, 48)).toBe(73);
});