const sum = require('../sum');

test('adds 92 + 70 to equal 162', () => {
  expect(sum(92, 70)).toBe(162);
});