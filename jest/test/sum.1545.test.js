const sum = require('../sum');

test('adds 37 + 65 to equal 102', () => {
  expect(sum(37, 65)).toBe(102);
});