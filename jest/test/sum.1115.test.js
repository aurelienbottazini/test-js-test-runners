const sum = require('../sum');

test('adds 18 + 83 to equal 101', () => {
  expect(sum(18, 83)).toBe(101);
});