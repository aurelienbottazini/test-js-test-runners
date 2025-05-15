const sum = require('../sum');

test('adds 80 + 22 to equal 102', () => {
  expect(sum(80, 22)).toBe(102);
});