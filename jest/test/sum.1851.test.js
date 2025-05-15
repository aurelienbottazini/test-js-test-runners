const sum = require('../sum');

test('adds 40 + 62 to equal 102', () => {
  expect(sum(40, 62)).toBe(102);
});