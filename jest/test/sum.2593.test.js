const sum = require('../sum');

test('adds 71 + 31 to equal 102', () => {
  expect(sum(71, 31)).toBe(102);
});