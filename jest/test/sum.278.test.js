const sum = require('../sum');

test('adds 64 + 98 to equal 162', () => {
  expect(sum(64, 98)).toBe(162);
});