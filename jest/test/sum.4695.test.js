const sum = require('../sum');

test('adds 54 + 19 to equal 73', () => {
  expect(sum(54, 19)).toBe(73);
});