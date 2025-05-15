const sum = require('../sum');

test('adds 82 + 20 to equal 102', () => {
  expect(sum(82, 20)).toBe(102);
});