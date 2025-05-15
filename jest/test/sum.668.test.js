const sum = require('../sum');

test('adds 30 + 8 to equal 38', () => {
  expect(sum(30, 8)).toBe(38);
});