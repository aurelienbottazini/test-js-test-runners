const sum = require('../sum');

test('adds 31 + 71 to equal 102', () => {
  expect(sum(31, 71)).toBe(102);
});