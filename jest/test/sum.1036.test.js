const sum = require('../sum');

test('adds 50 + 51 to equal 101', () => {
  expect(sum(50, 51)).toBe(101);
});