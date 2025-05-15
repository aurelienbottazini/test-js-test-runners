const sum = require('../sum');

test('adds 2 + 73 to equal 75', () => {
  expect(sum(2, 73)).toBe(75);
});