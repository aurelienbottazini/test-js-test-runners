const sum = require('../sum');

test('adds 81 + 81 to equal 162', () => {
  expect(sum(81, 81)).toBe(162);
});