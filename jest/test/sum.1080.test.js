const sum = require('../sum');

test('adds 87 + 75 to equal 162', () => {
  expect(sum(87, 75)).toBe(162);
});