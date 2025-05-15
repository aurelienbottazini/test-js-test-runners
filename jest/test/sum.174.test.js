const sum = require('../sum');

test('adds 95 + 67 to equal 162', () => {
  expect(sum(95, 67)).toBe(162);
});