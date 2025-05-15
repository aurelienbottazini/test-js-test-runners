const sum = require('../sum');

test('adds 71 + 51 to equal 122', () => {
  expect(sum(71, 51)).toBe(122);
});