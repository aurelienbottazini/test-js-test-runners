const sum = require('../sum');

test('adds 32 + 41 to equal 73', () => {
  expect(sum(32, 41)).toBe(73);
});