const sum = require('../sum');

test('adds 80 + 82 to equal 162', () => {
  expect(sum(80, 82)).toBe(162);
});