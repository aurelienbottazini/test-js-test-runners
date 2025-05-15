const sum = require('../sum');

test('adds 34 + 67 to equal 101', () => {
  expect(sum(34, 67)).toBe(101);
});