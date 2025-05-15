const sum = require('../sum');

test('adds 88 + 14 to equal 102', () => {
  expect(sum(88, 14)).toBe(102);
});