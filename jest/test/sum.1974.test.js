const sum = require('../sum');

test('adds 9 + 55 to equal 64', () => {
  expect(sum(9, 55)).toBe(64);
});