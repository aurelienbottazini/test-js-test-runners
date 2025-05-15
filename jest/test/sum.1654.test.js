const sum = require('../sum');

test('adds 83 + 18 to equal 101', () => {
  expect(sum(83, 18)).toBe(101);
});