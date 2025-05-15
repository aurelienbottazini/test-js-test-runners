const sum = require('../sum');

test('adds 56 + 18 to equal 74', () => {
  expect(sum(56, 18)).toBe(74);
});