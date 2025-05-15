const sum = require('../sum');

test('adds 23 + 8 to equal 31', () => {
  expect(sum(23, 8)).toBe(31);
});