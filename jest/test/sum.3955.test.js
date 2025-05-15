const sum = require('../sum');

test('adds 45 + 8 to equal 53', () => {
  expect(sum(45, 8)).toBe(53);
});