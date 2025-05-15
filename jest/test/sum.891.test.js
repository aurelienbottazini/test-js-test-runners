const sum = require('../sum');

test('adds 73 + 0 to equal 73', () => {
  expect(sum(73, 0)).toBe(73);
});