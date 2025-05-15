const sum = require('../sum');

test('adds 32 + 70 to equal 102', () => {
  expect(sum(32, 70)).toBe(102);
});