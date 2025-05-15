const sum = require('../sum');

test('adds 68 + 21 to equal 89', () => {
  expect(sum(68, 21)).toBe(89);
});