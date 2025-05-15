const sum = require('../sum');

test('adds 2 + 71 to equal 73', () => {
  expect(sum(2, 71)).toBe(73);
});