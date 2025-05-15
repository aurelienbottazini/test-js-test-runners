const sum = require('../sum');

test('adds 87 + 80 to equal 167', () => {
  expect(sum(87, 80)).toBe(167);
});