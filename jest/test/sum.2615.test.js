const sum = require('../sum');

test('adds 5 + 96 to equal 101', () => {
  expect(sum(5, 96)).toBe(101);
});