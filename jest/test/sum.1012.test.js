const sum = require('../sum');

test('adds 87 + 15 to equal 102', () => {
  expect(sum(87, 15)).toBe(102);
});