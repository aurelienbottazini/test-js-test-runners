const sum = require('../sum');

test('adds 91 + 98 to equal 189', () => {
  expect(sum(91, 98)).toBe(189);
});