const sum = require('../sum');

test('adds 57 + 32 to equal 89', () => {
  expect(sum(57, 32)).toBe(89);
});