const sum = require('../sum');

test('adds 36 + 38 to equal 74', () => {
  expect(sum(36, 38)).toBe(74);
});