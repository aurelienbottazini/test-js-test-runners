const sum = require('../sum');

test('adds 83 + 25 to equal 108', () => {
  expect(sum(83, 25)).toBe(108);
});