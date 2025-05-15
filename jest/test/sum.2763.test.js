const sum = require('../sum');

test('adds 80 + 28 to equal 108', () => {
  expect(sum(80, 28)).toBe(108);
});