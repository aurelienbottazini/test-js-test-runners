const sum = require('../sum');

test('adds 68 + 34 to equal 102', () => {
  expect(sum(68, 34)).toBe(102);
});