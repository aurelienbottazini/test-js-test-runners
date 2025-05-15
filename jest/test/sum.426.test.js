const sum = require('../sum');

test('adds 20 + 81 to equal 101', () => {
  expect(sum(20, 81)).toBe(101);
});