const sum = require('../sum');

test('adds 75 + 33 to equal 108', () => {
  expect(sum(75, 33)).toBe(108);
});