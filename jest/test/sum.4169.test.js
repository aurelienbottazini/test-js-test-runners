const sum = require('../sum');

test('adds 96 + 66 to equal 162', () => {
  expect(sum(96, 66)).toBe(162);
});