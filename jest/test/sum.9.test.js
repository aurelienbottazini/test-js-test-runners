const sum = require('../sum');

test('adds 35 + 73 to equal 108', () => {
  expect(sum(35, 73)).toBe(108);
});