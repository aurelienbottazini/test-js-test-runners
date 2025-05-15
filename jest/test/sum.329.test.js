const sum = require('../sum');

test('adds 41 + 61 to equal 102', () => {
  expect(sum(41, 61)).toBe(102);
});