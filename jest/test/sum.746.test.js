const sum = require('../sum');

test('adds 97 + 65 to equal 162', () => {
  expect(sum(97, 65)).toBe(162);
});