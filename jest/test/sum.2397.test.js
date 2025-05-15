const sum = require('../sum');

test('adds 64 + 9 to equal 73', () => {
  expect(sum(64, 9)).toBe(73);
});