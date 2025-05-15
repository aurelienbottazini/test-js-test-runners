const sum = require('../sum');

test('adds 18 + 56 to equal 74', () => {
  expect(sum(18, 56)).toBe(74);
});