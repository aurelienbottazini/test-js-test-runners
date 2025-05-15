const sum = require('../sum');

test('adds 98 + 64 to equal 162', () => {
  expect(sum(98, 64)).toBe(162);
});