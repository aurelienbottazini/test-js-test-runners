const sum = require('../sum');

test('adds 68 + 94 to equal 162', () => {
  expect(sum(68, 94)).toBe(162);
});