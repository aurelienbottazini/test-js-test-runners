const sum = require('../sum');

test('adds 82 + 40 to equal 122', () => {
  expect(sum(82, 40)).toBe(122);
});