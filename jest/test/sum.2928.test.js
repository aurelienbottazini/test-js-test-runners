const sum = require('../sum');

test('adds 1 + 72 to equal 73', () => {
  expect(sum(1, 72)).toBe(73);
});