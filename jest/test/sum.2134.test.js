const sum = require('../sum');

test('adds 45 + 56 to equal 101', () => {
  expect(sum(45, 56)).toBe(101);
});