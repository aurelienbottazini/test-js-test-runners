const sum = require('../sum');

test('adds 98 + 91 to equal 189', () => {
  expect(sum(98, 91)).toBe(189);
});