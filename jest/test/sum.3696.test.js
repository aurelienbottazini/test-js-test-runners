const sum = require('../sum');

test('adds 51 + 50 to equal 101', () => {
  expect(sum(51, 50)).toBe(101);
});