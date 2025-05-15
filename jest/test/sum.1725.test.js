const sum = require('../sum');

test('adds 51 + 57 to equal 108', () => {
  expect(sum(51, 57)).toBe(108);
});