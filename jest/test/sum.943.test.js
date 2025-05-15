const sum = require('../sum');

test('adds 89 + 32 to equal 121', () => {
  expect(sum(89, 32)).toBe(121);
});