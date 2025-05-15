const sum = require('../sum');

test('adds 74 + 15 to equal 89', () => {
  expect(sum(74, 15)).toBe(89);
});