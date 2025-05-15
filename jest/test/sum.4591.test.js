const sum = require('../sum');

test('adds 89 + 73 to equal 162', () => {
  expect(sum(89, 73)).toBe(162);
});