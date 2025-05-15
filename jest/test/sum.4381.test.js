const sum = require('../sum');

test('adds 66 + 96 to equal 162', () => {
  expect(sum(66, 96)).toBe(162);
});