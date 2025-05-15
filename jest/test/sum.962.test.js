const sum = require('../sum');

test('adds 65 + 97 to equal 162', () => {
  expect(sum(65, 97)).toBe(162);
});