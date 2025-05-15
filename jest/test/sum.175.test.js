const sum = require('../sum');

test('adds 38 + 64 to equal 102', () => {
  expect(sum(38, 64)).toBe(102);
});