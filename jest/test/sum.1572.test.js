const sum = require('../sum');

test('adds 67 + 95 to equal 162', () => {
  expect(sum(67, 95)).toBe(162);
});