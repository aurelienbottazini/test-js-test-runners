const sum = require('../sum');

test('adds 30 + 23 to equal 53', () => {
  expect(sum(30, 23)).toBe(53);
});