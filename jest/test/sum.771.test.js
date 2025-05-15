const sum = require('../sum');

test('adds 88 + 74 to equal 162', () => {
  expect(sum(88, 74)).toBe(162);
});